import { z } from "zod";

const ERROR_MESSAGE = {
  REQUIRED: "필수임",
};

export const InfoSchema = z.object({
  title: z.string().min(1, ERROR_MESSAGE.REQUIRED),
  slug: z.string().min(1, ERROR_MESSAGE.REQUIRED),
});

export const MetaTagSchema = z.object({
  property: z.string().min(1),
  content: z.string().min(1),
});

export const PageSchema = z.object({
  info: InfoSchema,
  metaTagList: z.array(MetaTagSchema),
});
