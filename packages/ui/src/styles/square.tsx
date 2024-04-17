import { cn } from "@ddal-kkak/shared";

type SquareProps = {
  className: string;
};
export function Square({ className }: SquareProps) {
  return <div className={cn("w-[220px] h-[40px] inline-block", className)} />;
}
