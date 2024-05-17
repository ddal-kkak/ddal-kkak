import { FieldContainer } from "@/components/block-field/index";
import { ColorField, InputField } from "@/components/ui/field";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Button } from "@ddal-kkak/ui/atoms";
import { Fragment } from "react";

export function VideoField({ index }: { index: number }) {
  const { register, control } = useFormContext();

  const { fields, append } = useFieldArray({
    control,
    name: `dataList.${index}.data.blockData.textBlockList`,
  });

  return (
    <FieldContainer>
      <InputField
        label={"비디오"}
        isRequired
        {...register(`dataList.${index}.data.blockData.videoUrl`)}
      />

      <ColorField
        label={"배경색"}
        {...register(`dataList.${index}.data.blockStyle.backgroundColor`)}
      />
      <InputField
        label={"최대 높이"}
        {...register(`dataList.${index}.data.blockStyle.maxHeight`)}
      />
      <InputField
        label={"너비"}
        {...register(`dataList.${index}.data.blockStyle.width`)}
      />
      <hr />
      <InputField
        label={"버튼 텍스트"}
        {...register(`dataList.${index}.data.blockData.buttonData.text`)}
      />
      <InputField
        label={"버튼 링크"}
        {...register(`dataList.${index}.data.blockData.buttonData.link`)}
      />
      <hr />
      {/*<Button*/}
      {/*  theme={"primary"}*/}
      {/*  size={"sm"}*/}
      {/*  type={"button"}*/}
      {/*  onClick={() =>*/}
      {/*    append({*/}
      {/*      name: "TextBlock",*/}
      {/*      data: {*/}
      {/*        blockData: {*/}
      {/*          text: "",*/}
      {/*        },*/}
      {/*        blockStyle: {*/}
      {/*          color: "#000",*/}
      {/*          fontSize: 16,*/}
      {/*          fontWeight: "normal",*/}
      {/*          lineHeight: 1.5,*/}
      {/*          textAlign: "left",*/}
      {/*          backgroundColor: "#fff",*/}
      {/*          justifyContent: "flex-start",*/}
      {/*          paddingLeft: 0,*/}
      {/*          paddingRight: 0,*/}
      {/*          paddingTop: 0,*/}
      {/*          paddingBottom: 0,*/}
      {/*        },*/}
      {/*      },*/}
      {/*    })*/}
      {/*  }*/}
      {/*>*/}
      {/*  텍스트 추가*/}
      {/*</Button>*/}
      {/*{fields.map((field, childIndex) => (*/}
      {/*  <Fragment key={field.id}>*/}
      {/*    <InputField*/}
      {/*      label={"텍스트"}*/}
      {/*      isRequired*/}
      {/*      {...register(*/}
      {/*        `dataList.${index}.data.blockData.textBlockList.${childIndex}.data.blockData.text`,*/}
      {/*      )}*/}
      {/*    />*/}
      {/*    <ColorField*/}
      {/*      label={"색상"}*/}
      {/*      {...register(*/}
      {/*        `dataList.${index}.data.blockData.textBlockList.${childIndex}.data.blockStyle.color`,*/}
      {/*      )}*/}
      {/*    />*/}
      {/*    <InputField*/}
      {/*      label={"폰트 크기"}*/}
      {/*      {...register(*/}
      {/*        `dataList.${index}.data.blockData.textBlockList.${childIndex}.data.blockStyle.fontSize`,*/}
      {/*      )}*/}
      {/*    />*/}
      {/*    <InputField*/}
      {/*      label={"폰트 굵기"}*/}
      {/*      {...register(*/}
      {/*        `dataList.${index}.data.blockData.textBlockList.${childIndex}.data.blockStyle.fontWeight`,*/}
      {/*      )}*/}
      {/*    />*/}
      {/*    <InputField*/}
      {/*      label={"행간"}*/}
      {/*      {...register(*/}
      {/*        `dataList.${index}.data.blockData.textBlockList.${childIndex}.data.blockStyle.lineHeight`,*/}
      {/*      )}*/}
      {/*    />*/}
      {/*    <InputField*/}
      {/*      label={"정렬"}*/}
      {/*      {...register(*/}
      {/*        `dataList.${index}.data.blockData.textBlockList.${childIndex}.data.blockStyle.textAlign`,*/}
      {/*      )}*/}
      {/*    />*/}
      {/*    <ColorField*/}
      {/*      label={"배경색"}*/}
      {/*      {...register(*/}
      {/*        `dataList.${index}.data.blockData.textBlockList.${childIndex}.data.blockStyle.backgroundColor`,*/}
      {/*      )}*/}
      {/*    />*/}
      {/*    <InputField*/}
      {/*      label={"정렬"}*/}
      {/*      {...register(*/}
      {/*        `dataList.${index}.data.blockData.textBlockList.${childIndex}.data.blockStyle.justifyContent`,*/}
      {/*      )}*/}
      {/*    />*/}
      {/*    <InputField*/}
      {/*      label={"패딩 좌"}*/}
      {/*      {...register(*/}
      {/*        `dataList.${index}.data.blockData.textBlockList.${childIndex}.data.blockStyle..paddingLeft`,*/}
      {/*      )}*/}
      {/*    />*/}
      {/*    <InputField*/}
      {/*      label={"패딩 우"}*/}
      {/*      {...register(*/}
      {/*        `dataList.${index}.data.blockData.textBlockList.${childIndex}.data.blockStyle.paddingRight`,*/}
      {/*      )}*/}
      {/*    />*/}
      {/*    <InputField*/}
      {/*      label={"패딩 상"}*/}
      {/*      {...register(*/}
      {/*        `dataList.${index}.data.blockData.textBlockList.${childIndex}.data.blockStyle.paddingTop`,*/}
      {/*      )}*/}
      {/*    />*/}
      {/*    <InputField*/}
      {/*      label={"패딩 하"}*/}
      {/*      {...register(*/}
      {/*        `dataList.${index}.data.blockData.textBlockList.${childIndex}.data.blockStyle.paddingBottom`,*/}
      {/*      )}*/}
      {/*    />*/}
      {/*  </Fragment>*/}
      {/*))}*/}
    </FieldContainer>
  );
}
