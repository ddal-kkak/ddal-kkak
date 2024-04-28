"use client";

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@ddal-kkak/shared";

const toastVariants = cva(["p-3 rounded-lg w-[240px]"], {
  variants: {
    theme: {
      default: ["bg-ui-01"],
      brand: ["bg-brand-01"],
      primary: ["bg-primary-01"],
      secondary: ["bg-secondary-01"],
      danger: ["bg-danger-01"],
    },
    variant: {
      solid: ["text-white"],
      light: ["text-ui-01"],
    },
  },
  compoundVariants: [],
  defaultVariants: {
    theme: "default",
    variant: "solid",
  },
});

export type ToastProps = VariantProps<typeof toastVariants> & {
  children?: React.ReactNode;
  align?: "left" | "center";
};

function Toast({ variant, children, align = "left" }: ToastProps) {
  return (
    <div className={cn("flex gap-2", toastVariants({ variant }))}>
      <span>O</span>
      <div className={cn("flex-1", align === "center" && "text-center")}>
        {children}
      </div>
      <span>X</span>
    </div>
  );
}

Toast.displayName = "Toast";

export { Toast };
