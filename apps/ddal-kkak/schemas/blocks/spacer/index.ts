import { z } from "zod";
import { zodColor, zodStringNumber } from "@/schemas/blocks/util";

export const SpacerBlockSchema = z.object({
  name: z.literal("SpacerBlock"),
  data: z.object({
    blockStyle: z
      .object({
        height: zodStringNumber,
        backgroundColor: zodColor.optional(),
      })
      .optional(),
  }),
});
