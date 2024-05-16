import { PropsWithChildren } from "react";
import { cn } from "@ddal-kkak/shared/utils";

type DefaultLayoutProps = PropsWithChildren<{
  className?: string;
}>;

export function DefaultLayout({ children, className }: DefaultLayoutProps) {
  return (
    <div className={cn("w-full max-w-4xl mx-auto sm:px-3", className)}>
      {children}
    </div>
  );
}
