import { zodStringNumber } from "@/schemas/blocks/util";

export * from "./spacer";

import { z } from "zod";

export type BlockSchemaProps<T extends z.ZodObject<any>> = z.infer<T>["data"];

export const paddingSchema = z.object({
  paddingTop: zodStringNumber.optional(),
  paddingBottom: zodStringNumber.optional(),
  paddingLeft: zodStringNumber.optional(),
  paddingRight: zodStringNumber.optional(),
});
