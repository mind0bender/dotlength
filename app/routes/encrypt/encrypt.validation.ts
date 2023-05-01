import { z } from "zod";

const encryptDataSchema = z.object({
  message: z.string().min(1),
});
export type EncryptData = z.infer<typeof encryptDataSchema>;

export default encryptDataSchema;
