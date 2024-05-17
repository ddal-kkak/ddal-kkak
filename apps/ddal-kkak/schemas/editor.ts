import { z } from "zod";
import {
  ImageBlockSchema,
  SpacerBlockSchema,
  TextBlockSchema,
  VideoBlockSchema,
} from "@/schemas/blocks";

const ERROR_MESSAGE = {
  REQUIRED: "필수임",
};

export const InfoSchema = z.object({
  title: z.string().min(1, ERROR_MESSAGE.REQUIRED),
  slug: z.string().min(1, ERROR_MESSAGE.REQUIRED),
});

export const MetaTagSchema = z.object({
  property: z.string().min(1, ERROR_MESSAGE.REQUIRED),
  content: z.string().min(1, ERROR_MESSAGE.REQUIRED),
});

export const PageSchema = z.object({
  info: InfoSchema,
  metaTagList: z.array(MetaTagSchema),
  dataList: z
    .array(
      TextBlockSchema.or(SpacerBlockSchema)
        .or(ImageBlockSchema)
        .or(VideoBlockSchema),
    )
    .optional(),
});
