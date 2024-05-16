import { PiCursorClick } from "react-icons/pi";
import { ReactIconsType } from "./type";
import { cn } from "@ddal-kkak/shared/utils";

export default function IconClickOutline({
  className = "text-2xl",
}: ReactIconsType) {
  return <PiCursorClick className={cn("text-2xl", className)} />;
}
