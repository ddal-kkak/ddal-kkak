"use client";
import { usePage } from "@/hooks/pages";
import { PageType } from "@/types/pages";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PageSchema } from "@/schemas/editor";
import { z } from "zod";
import { Button, Input } from "@ddal-kkak/ui/atoms";
import { SpacerField } from "@/components/block-field";
import { TextField } from "@/components/block-field/text-field";
import { ImageField } from "@/components/ui/field";

type EditorBlocksProps = {
  page?: PageType;
};

type Form = z.infer<typeof PageSchema>;

export default function EditorBlocks({ page }: EditorBlocksProps) {
  // const { data, isLoading } = usePage(page);

  const methods = useForm<Form>({
    resolver: zodResolver(PageSchema),
  });

  const { fields, append } = useFieldArray({
    control: methods.control,
    name: "dataList",
  });

  const handleSubmit = (data: Form) => {
    console.log("submit : ", data);
  };

  // console.log(methods.formState.errors);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <Button type={"submit"}>제출</Button>
        <div className={"space-y-4"}>
          <div className="w-full border border-neutral-200 bg-white rounded-lg p-10 flex flex-col">
            <label htmlFor="">
              제목 :
              <Input {...methods.register("info.title")} />
            </label>
            <label htmlFor="">
              주소 :
              <Input {...methods.register("info.slug")} />
            </label>
          </div>
          <div className="w-full border border-neutral-200 bg-white rounded-lg p-10 flex flex-col">
            <label htmlFor="">
              타이틀
              <Input
                {...methods.register("metaTagList.0.property")}
                type={"hidden"}
                defaultValue={"og:title"}
              />
              <Input {...methods.register("metaTagList.0.content")} />
            </label>

            <label htmlFor="">
              설명
              <Input
                {...methods.register("metaTagList.1.property")}
                type={"hidden"}
                defaultValue={"og:description"}
              />
              <Input {...methods.register("metaTagList.1.content")} />
            </label>
            <label htmlFor="">
              이미지
              <Input
                {...methods.register("metaTagList.2.property")}
                type={"hidden"}
                defaultValue={"og:image"}
              />
              <Input {...methods.register("metaTagList.2.content")} />
            </label>
          </div>
        </div>

        {/* TODO: array 에 추가되는 방식 */}

        <Button
          type={"button"}
          onClick={() =>
            append({
              name: "SpacerBlock",
              data: {
                blockStyle: {
                  height: 1,
                  backgroundColor: "#fff",
                },
              },
            })
          }
        >
          Spacer block 추가
        </Button>
        <Button
          type={"button"}
          onClick={() =>
            append({
              name: "TextBlock",
              data: {
                blockData: {
                  text: "",
                },
                blockStyle: {
                  color: "#000",
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 1.5,
                  textAlign: "left",
                  backgroundColor: "#fff",
                  justifyContent: "flex-start",
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                },
              },
            })
          }
        >
          Text Block 추가
        </Button>
        <Button
          type={"button"}
          onClick={() =>
            append({
              name: "ImageBlock",
              data: {
                blockData: {
                  src: "",
                  alt: "",
                },
                blockStyle: {
                  width: 100,
                  backgroundColor: "#fff",
                  justifyContent: "flex-start",
                  paddingTop: 0,
                  paddingBottom: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                },
              },
            })
          }
        >
          Image Block 추가
        </Button>
        {fields.map((field, index) => getFieldComponent(field, index))}
      </form>
    </FormProvider>
  );
}

function getFieldComponent(field: any, index: number) {
  console.log(field.data);
  switch (field.name) {
    case "TextBlock":
      return <TextField {...field.data} index={index} key={index} />;
    case "SpacerBlock":
      return <SpacerField {...field.data} index={index} key={index} />;
    case "ImageBlock":
      return <ImageField index={index} key={index} />;
    case "VideoBlock":
    // return <VideoBlock />;
    default:
      return null;
  }
}
