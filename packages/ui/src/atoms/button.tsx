"use client";

import { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren;

function Button({ children }: ButtonProps) {
  return <button>{children}</button>;
}

Button.displayName = "Button";

export { Button };
