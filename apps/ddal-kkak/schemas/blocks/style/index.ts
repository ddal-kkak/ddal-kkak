import { z } from "zod";
import { zodStringNumber } from "@/schemas/blocks";

export const paddingSchema = z.object({
  paddingTop: zodStringNumber.optional(),
  paddingBottom: zodStringNumber.optional(),
  paddingLeft: zodStringNumber.optional(),
  paddingRight: zodStringNumber.optional(),
});
