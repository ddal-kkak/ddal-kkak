import { PiCursorClickFill } from "react-icons/pi";
import { ReactIconsType } from "./type";
import { cn } from "@ddal-kkak/shared/utils";

export default function IconClickFill({ className }: ReactIconsType) {
  return <PiCursorClickFill className={cn("text-2xl", className)} />;
}
