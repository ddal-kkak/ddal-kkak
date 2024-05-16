export * from "./spacer";

import { z } from "zod";

export type BlockSchemaProps<T extends z.ZodObject<any>> = z.infer<T>["data"];
