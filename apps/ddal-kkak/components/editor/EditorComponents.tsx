"use client";
import { Button } from "@ddal-kkak/ui/atoms";
import React from "react";

const BlockAddButtonList = [
  { id: 1, type: "TextBlock", text: "텍스트", handleClick: () => {} },
  { id: 2, type: "SpacerBlock", text: "여백", handleClick: () => {} },
  { id: 3, type: "ImageBlock", text: "이미지", handleClick: () => {} },
  { id: 4, type: "VideoBlock", text: "비디오", handleClick: () => {} },
];

export default function EditorComponents() {
  return (
    <ul className="w-full grid grid-cols-2 gap-4">
      {BlockAddButtonList.map((buttonInfo) => (
        <li key={buttonInfo.id} className="w-full">
          <Button
            variant="ghost"
            className="w-full aspect-square"
            onClick={buttonInfo.handleClick}
          >
            {buttonInfo.text}
          </Button>
        </li>
      ))}
    </ul>
  );
}
