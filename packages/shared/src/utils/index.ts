import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const isString = (value: unknown): value is string =>
  typeof value === "string";

export const isNumber = (value: unknown): value is number =>
  typeof value === "number";
