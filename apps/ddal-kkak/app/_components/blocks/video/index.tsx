"use client";

import { Button } from "@ddal-kkak/ui/atoms";
import { TextBlock, TextBlockProps } from "@/app/_components/blocks";
import { ButtonBlockData } from "@/app/_components/blocks/types";
import { cn } from "@ddal-kkak/shared/utils";

type VideoBlockProps = {
  blockData: {
    buttonData?: ButtonBlockData;
    videoUrl: string;
    textList?: TextBlockProps[];
  };
  blockStyle: {
    backgroundColor?: string;
    maxHeight?: number;
    width?: number;
  };
};

export default function VideoBlock({ blockData, blockStyle }: VideoBlockProps) {
  const { buttonData, videoUrl, textList = [] } = blockData;
  const {
    backgroundColor = "transparent",
    maxHeight = "100%",
    width = "100%",
  } = blockStyle;

  return (
    <div
      className={"relative w-full h-full flex justify-center"}
      style={{
        backgroundColor,
      }}
    >
      <video
        autoPlay
        playsInline
        loop
        muted
        className={"object-cover"}
        style={{
          width,
          maxHeight,
        }}
      >
        <source src={videoUrl} />
      </video>
      <div
        className={cn(
          "absolute inset-0",
          "flex flex-col items-center justify-center",
          "whitespace-pre-wrap",
        )}
      >
        {textList.map((textItem, index) => (
          <TextBlock {...textItem} key={textItem + `${index}`} />
        ))}
        {buttonData ? <ButtonComponent {...buttonData} /> : null}
      </div>
    </div>
  );
}

type ButtonComponentProps = {
  text: string;
  link: string;
};

const ButtonComponent = ({ text, link }: ButtonComponentProps) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <Button
      className={"max-w-[180px] w-full bg-[#DE1A12]"}
      size={"xl"}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};
