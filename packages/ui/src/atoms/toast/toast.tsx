"use client";

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@ddal-kkak/shared";
import { X } from "lucide-react";

const toastVariants = cva(["p-3 rounded-lg w-[240px] body-15"], {
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
  compoundVariants: [
    {
      theme: "default",
      variant: "light",
      className: "bg-ui-05",
    },
    {
      theme: "brand",
      variant: "light",
      className: "bg-brand-02",
    },
    {
      theme: "primary",
      variant: "light",
      className: "bg-primary-02",
    },
    {
      theme: "secondary",
      variant: "light",
      className: "bg-secondary-02",
    },
    {
      theme: "danger",
      variant: "light",
      className: "bg-danger-02",
    },
  ],
  defaultVariants: {
    theme: "default",
    variant: "solid",
  },
});

export type ToastProps = VariantProps<typeof toastVariants> & {
  children?: React.ReactNode;
  align?: "left" | "center";
  onClick?: () => void;
  Icon?: React.ComponentType;
  isX?: boolean;
};

function Toast({
  variant,
  theme,
  children,
  onClick,
  align = "left",
  Icon,
  isX = true,
}: ToastProps) {
  const handleClickClose = () => {
    onClick?.();
  };

  return (
    <div className={cn("flex gap-2", toastVariants({ variant, theme }))}>
      {Icon ? <Icon /> : <Box isShow={align === "center"} />}
      <div className={cn("flex-1", align === "center" && "text-center")}>
        {children}
      </div>
      {isX ? (
        <X className={"cursor-pointer"} onClick={handleClickClose} />
      ) : (
        <Box isShow={align === "center"} />
      )}
    </div>
  );
}

Toast.displayName = "Toast";

export { Toast };

function Box({ isShow }: { isShow: boolean }) {
  return <>{isShow ? <div className={"w-6 h-6 inline-block"} /> : null}</>;
}
