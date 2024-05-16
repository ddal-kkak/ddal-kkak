import React from "react";
import { cn } from "@ddal-kkak/shared/utils";

type Props = {
  className?: string;
};

export default function HorizonLine({ className }: Props) {
  const combinedClass = cn("border-b", "border-grey-200", "w-full", className);

  return <div className={combinedClass} />;
}
