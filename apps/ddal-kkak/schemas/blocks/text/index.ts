import { z } from "zod";
import { zodColor } from "@/schemas/blocks/util";
import { paddingSchema } from "@/schemas/blocks";

export const TextBlockSchema = z.object({
  name: z.literal("TextBlock"),
  data: z.object({
    blockData: z.object({
      text: z.string().min(1),
    }),
    blockStyle: z
      .object({
        color: z.string().optional(),
        fontWeight: z.number().optional(),
        fontSize: z.number().optional(),
        textAlign: z.enum(["left", "center", "right", "justify"]).optional(),
        lineHeight: z.number().optional(),
        backgroundColor: zodColor,
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
      .merge(paddingSchema),
  }),
});
