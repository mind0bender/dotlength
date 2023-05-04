import { z } from "zod";

const ratioSchema = z.object({
  numerator: z.string().min(1),
  denominator: z.string().min(2),
});

export type RatioForm = z.infer<typeof ratioSchema>;

export default ratioSchema;
