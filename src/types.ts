import { z } from "astro/zod";

export const resumeFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export type ResumeLayoutFrontmatter = z.infer<typeof resumeFrontmatterSchema>;
