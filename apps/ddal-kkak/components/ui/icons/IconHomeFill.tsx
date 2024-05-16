import React from "react";
import { AiFillHome } from "react-icons/ai";
import { ReactIconsType } from "./type";
import { cn } from "@ddal-kkak/shared/utils";

export default function IconHomeFill({
  className = "text-2xl",
}: ReactIconsType) {
  return <AiFillHome className={cn("text-2xl", className)} />;
}
