

import { z } from "zod";
 
export const formSchema = z.object({
  username: z.string().min(2).max(50),
  dakoppervlak_toggle: z.boolean().default(false).optional(),
  security_emails: z.boolean().default(true),
  lockedField: z.number().default(5).optional(),
});
 
export type FormSchema = typeof formSchema;
