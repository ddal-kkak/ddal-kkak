import { z } from "zod";
import { zodColor, zodStringNumber } from "@/schemas/blocks/util";
import { paddingSchema } from "@/schemas/blocks";

export const TextBlockSchema = z.object({
  name: z.literal("TextBlock"),
  data: z.object({
    blockData: z.object({
      text: z.string().min(1),
    }),
    blockStyle: z
      .object({
        color: zodColor.optional(),
        fontWeight: zodStringNumber.optional(),
        fontSize: zodStringNumber.optional(),
        textAlign: z.enum(["left", "center", "right", "justify"]).optional(),
        lineHeight: zodStringNumber.optional(),
        backgroundColor: zodColor.optional(),
        justifyContent: z
          .enum([
            "flex-start",
            "center",
            "flex-end",
            "space-between",
            "space-around",
            "space-evenly",
          ])
          .optional(),
      })
      .merge(paddingSchema)
      .optional(),
  }),
});
