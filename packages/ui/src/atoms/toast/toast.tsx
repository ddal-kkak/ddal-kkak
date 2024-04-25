"use client";

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@ddal-kkak/shared";

const toastVariants = cva([], {
  variants: {
    theme: {
      default: [],
      brand: [],
      primary: [],
      secondary: [],
      danger: [],
    },
    variant: {
      solid: [],
      light: [],
    },
  },
  compoundVariants: [],
  defaultVariants: {
    theme: "default",
    variant: "solid",
  },
});

export type ToastProps = VariantProps<typeof toastVariants>;

function Toast({ variant }: ToastProps) {
  return <div className={cn(toastVariants({ variant }))}>toast</div>;
}

Toast.displayName = "Toast";

export { Toast };
