"use client";

import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@ddal-kkak/shared";

const buttonVariants = cva(["bg-ui-01 border", "rounded-lg"], {
  variants: {
    size: {
      sm: ["button-12", "p-[6px]", "rounded-md"],
      md: ["button-14", "p-2"],
      lg: ["button-15", "p-3"],
      xl: ["button-18", "p-[14px]"],
    },

    theme: {
      default: ["text-ui-01", "bg-ui-05 border-line-01"],
      gray: ["text-ui-02", "bg-ui-05 border-line-01"],
      brand: ["text-brand-01", "bg-brand-02 border-brand-01"],
      primary: ["text-primary-01", "bg-primary-02 border-primary-01"],
      secondary: ["text-secondary-01", "bg-secondary-02 border-secondary-01"],
      danger: ["text-danger-01", "bg-danger-02 border-danger-01"],
    },

    variant: {
      solid: ["text-white", "border-transparent"],
      light: ["border-transparent"],
      outline: [""],
      ghost: ["bg-white"],
      text: ["bg-transparent", "border-transparent"],
    },
  },
  compoundVariants: [
    {
      variant: "solid",
      theme: "default",
      className: "text-white bg-ui-01",
    },
    {
      variant: "solid",
      theme: "gray",
      className: "text-white bg-ui-02",
    },
    {
      variant: "solid",
      theme: "brand",
      className: "text-white bg-brand-01",
    },
    {
      variant: "solid",
      theme: "primary",
      className: "text-white bg-primary-01",
    },
    {
      variant: "solid",
      theme: "secondary",
      className: "text-white bg-secondary-01",
    },
    {
      variant: "solid",
      theme: "danger",
      className: "text-white bg-danger-01",
    },
  ],
  defaultVariants: {
    variant: "solid",
    theme: "default",
    size: "md",
  },
});

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, theme, size, className, ...rest }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, theme, size, className }))}
        ref={ref}
        {...rest}
      />
    );
  },
);

Button.displayName = "Button";

export { Button };
