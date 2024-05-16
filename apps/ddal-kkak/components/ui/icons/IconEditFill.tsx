import { RiEditBoxFill } from "react-icons/ri";
import { ReactIconsType } from "./type";
import { cn } from "@ddal-kkak/shared/utils";

export default function IconEditFill({
  className = "text-2xl",
}: ReactIconsType) {
  return <RiEditBoxFill className={cn("text-2xl", className)} />;
}
