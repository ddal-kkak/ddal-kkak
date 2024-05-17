import { forwardRef } from "react";
import { Label } from "@/components/ui/field/label";

type InputFieldProps = {
  label: string;
  isRequired?: boolean;
};

export const ColorField = forwardRef<HTMLInputElement, InputFieldProps>(
  function ({ label, isRequired, ...rest }, ref) {
    return (
      <Label label={label} isRequired={isRequired}>
        <input type={"color"} ref={ref} {...rest} />
      </Label>
    );
  },
);
