import { PropsWithChildren } from "react";

type LabelProps = PropsWithChildren<{
  label: string;
  isRequired?: boolean;
}>;

export function Label({ label, isRequired = false, children }: LabelProps) {
  return (
    <label className="block mb-2 text-sm font-medium text-gray-700">
      <span className="flex items-center">
        {label}
        {isRequired && <span className="ml-1 text-danger-01">*</span>}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
