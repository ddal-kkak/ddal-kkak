"use client";
import EditorButtons from "@/components/editor/EditorButtons";
import EditorComponents from "@/components/editor/EditorComponents";
import HorizonLine from "@/components/ui/HorizonLine";
import { PageSchema } from "@/schemas/editor";
import { PageType } from "@/types/pages";
import { Button, Input } from "@ddal-kkak/ui/atoms";
import { zodResolver } from "@hookform/resolvers/zod";
import { blockDefaultValue } from "constant/defaultBlock";
import React, { useEffect } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import FieldContainer from "./FieldContainer";
import LabelTag from "./LabelTag";
import { TextField } from "@/components/block-field/text-field";
import { SpacerField } from "@/components/block-field";
import { ImageField, InputField } from "@/components/ui/field";
import getFieldComponent from "@/lib/util/getFieldComponent";
import { useCreatePage } from "@/hooks/pages";
import { useRouter } from "next/navigation";
import { MENU_ROUTER } from "constant/route";

type EditorContainerProps = {
  page?: PageType;
};

type Form = z.infer<typeof PageSchema>;

const { SPACER, TEXT, IMAGE, VIDEO } = blockDefaultValue;

const BlockAddButtonList = [
  { id: 1, type: "TextBlock", text: "텍스트", defaultValue: TEXT },
  { id: 2, type: "SpacerBlock", text: "여백", defaultValue: SPACER },
  { id: 3, type: "ImageBlock", text: "이미지", defaultValue: IMAGE },
  { id: 4, type: "VideoBlock", text: "비디오", defaultValue: VIDEO },
];

export default function EditorContainer({ page }: EditorContainerProps) {
  // 편집하기일때, 기존 데이터 가져오기
  // const { data, isLoading } = usePage(page);

  const { mutateAsync, isSuccess } = useCreatePage();
  const router = useRouter();

  const methods = useForm<Form>({
    resolver: zodResolver(PageSchema),
  });
  const { fields, append } = useFieldArray({
    control: methods.control,
    name: "dataList",
  });

  const handleSubmit = async (data: Form) => {
    const res = await mutateAsync(data);
    console.log(res);
  };
  useEffect(() => {
    if (isSuccess) {
      router.push(MENU_ROUTER.dashboard.href);
    }
  }, [isSuccess]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <div className="relative w-full flex gap-5 flex-row-reverse">
          <div className="sticky top-24 self-start w-full shrink-0 basis-1/4 min-w-60 space-y-10 pl-5">
            <EditorButtons />
            <HorizonLine />
            <ul className="w-full grid grid-cols-2 gap-4">
              {BlockAddButtonList.map((button) => (
                <li key={button.id} className="w-full">
                  <Button
                    type={"button"}
                    variant="ghost"
                    className="w-full aspect-square"
                    onClick={() => append(button.defaultValue as any)}
                  >
                    {button.text}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full basis-3/4 min-h-[70vh] flex flex-col gap-10">
            <div className={"space-y-4"}>
              <FieldContainer>
                <div className="pb-6 text-headline18">기본 정보</div>
                <InputField
                  label={"제목"}
                  isRequired
                  {...methods.register("info.title")}
                />
                <InputField
                  label={"주소"}
                  isRequired
                  {...methods.register("info.slug")}
                />
              </FieldContainer>
              <FieldContainer>
                <div className="pb-6 text-headline18">메타 정보</div>
                <Input
                  {...methods.register("metaTagList.0.property")}
                  type={"hidden"}
                  defaultValue={"og:title"}
                />

                <InputField
                  label={"타이틀"}
                  isRequired
                  {...methods.register("metaTagList.0.content")}
                />

                <Input
                  {...methods.register("metaTagList.1.property")}
                  type={"hidden"}
                  defaultValue={"og:description"}
                />

                <InputField
                  label={"내용"}
                  isRequired
                  {...methods.register("metaTagList.1.content")}
                />

                <InputField
                  label={"이미지"}
                  isRequired
                  {...methods.register("metaTagList.2.content")}
                />
                <Input
                  {...methods.register("metaTagList.2.property")}
                  type={"hidden"}
                  defaultValue={"og:image"}
                />
              </FieldContainer>
            </div>
            <div className={"space-y-4"}>
              {fields.map((field, index) => getFieldComponent(field, index))}
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
