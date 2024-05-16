import { DefaultLayout } from "@/app/_components/common";

type TextBlockProps = {
  blockData: {
    text: string;
  };
  blockStyle: {
    color?: string;
    fontWeight?: number;
    fontSize?: number;
    textAlign?: "left" | "center" | "right" | "justify" | "initial" | "inherit";
    lineHeight?: number;
    backgroundColor?: string;
    justifyContent?:
      | "start"
      | "end"
      | "center"
      | "stretch"
      | "flex-start"
      | "flex-end"
      | "self-start"
      | "self-end"
      | "left"
      | "right"
      | "baseline";
    paddingLeft?: number;
    paddingRight?: number;
    paddingTop?: number;
    paddingBottom?: number;
  };
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
  } = blockStyle;

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
