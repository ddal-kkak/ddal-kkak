import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@ddal-kkak/shared";
import { cva, VariantProps } from "class-variance-authority";

const inputVariants = cva(
  [
    "border border-line-01",
    "bg-bg-01 text-ui-01",
    "placeholder:text-ui-03",
    "rounded-lg border border-line-01",
    "focus:outline-none",
    "focus:border-primary-01 focus:ring-primary-01",
    "focus:invalid:border-danger-01 focus:invalid:ring-danger-01",
    "disabled:bg-ui-05 disabled:text-ui-02 disabled:cursor-not-allowed",
  ],
  {
    variants: {
      size: {
        sm: ["p-[6px] body-12"],
        md: ["p-2 body-14"],
        lg: ["p-3 body-15"],
        xl: ["p-[14px] body-18"],
      },
      variant: {
        outline: [],
        light: ["bg-ui-05", "border-transparent"],
      },
    },
    defaultVariants: {
      size: "lg",
      variant: "outline",
    },
  },
);

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
  VariantProps<typeof inputVariants>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size, variant, className, ...rest }, ref) => {
    // TODO: left, right icon
    return (
      <input
        className={cn(
          inputVariants({
            size,
            variant,
            className,
          }),
        )}
        {...rest}
        ref={ref}
      />
    );
  },
);

export { Input };
