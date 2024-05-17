import { z } from "zod";
import { zodColor, zodStringNumber } from "@/schemas/blocks/util";
import { paddingSchema } from "@/schemas/blocks";

export const ImageBlockSchema = z.object({
  name: z.literal("ImageBlock"),
  data: z.object({
    blockData: z.object({
      src: z.string().min(1),
      alt: z.string().min(1),
    }),
    blockStyle: z
      .object({
        width: zodStringNumber.optional(),
        backgroundColor: zodColor.optional(),
        justifyContent: z
          .enum([
            "flex-start",
            "center",
            "flex-end",
            "space-around",
            "space-between",
            "space-evenly",
          ])
          .optional(),
      })
      .merge(paddingSchema)
      .optional(),
  }),
});
