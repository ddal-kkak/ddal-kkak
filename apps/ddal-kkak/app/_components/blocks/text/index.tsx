import { DefaultLayout } from "@/app/_components/common";
import {
  JustifyContent,
  Padding,
  TextAlignment,
} from "@/app/_components/blocks/types";

export type TextBlockProps = {
  blockData: {
    text: string;
  };
  blockStyle?: {
    color?: string;
    fontWeight?: number;
    fontSize?: number;
    textAlign?: TextAlignment;
    lineHeight?: number;
    backgroundColor?: string;
    justifyContent?: JustifyContent;
  } & Padding;
};

export function TextBlock({ blockData, blockStyle }: TextBlockProps) {
  const { text } = blockData;
  const {
    color = "black",
    fontWeight = 400,
    fontSize = 16,
    textAlign = "left",
    lineHeight = 1.2,
    backgroundColor,
    justifyContent = "flex-start",
    paddingLeft = 0,
    paddingRight = 0,
    paddingTop = 0,
    paddingBottom = 0,
  } = blockStyle ?? {};

  return (
    <div
      style={{
        backgroundColor,
      }}
    >
      <DefaultLayout>
        <p
          className={"flex w-full mx-auto"}
          style={{
            whiteSpace: "pre-wrap",
            wordBreak: "keep-all",
            color,
            fontSize,
            fontWeight,
            textAlign,
            lineHeight,
            backgroundColor,
            justifyContent,
            paddingLeft,
            paddingRight,
            paddingTop,
            paddingBottom,
          }}
        >
          {text}
        </p>
      </DefaultLayout>
    </div>
  );
}
