import { z } from "zod";
import { TextBlockSchema } from "@/schemas/blocks/text";
import { zodStringNumber } from "@/schemas/blocks/util";

export const VideoBlockSchema = z.object({
  name: z.literal("VideoBlock"),
  data: z.object({
    blockData: z.object({
      videoUrl: z.string().min(1),
      buttonData: z
        .object({
          text: z.string().min(1),
          link: z.string().min(1),
        })
        .optional(),
      textBlockList: z.array(TextBlockSchema.shape.data).optional(),
    }),
    blockStyle: z.object({
      backgroundColor: z.string().optional(),
      maxHeight: zodStringNumber.optional(),
      width: zodStringNumber.optional(),
    }),
  }),
});
