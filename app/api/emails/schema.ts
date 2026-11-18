import { z } from "zod";

const schema = z.object({
  firstname: z.string().trim().min(2).max(40),
  lastname: z.string().trim().min(2).max(40),
  email: z.string().email().max(120),
  telephoneNumber: z.string().max(20),
  message: z.string().max(1000),
});

export default schema;
