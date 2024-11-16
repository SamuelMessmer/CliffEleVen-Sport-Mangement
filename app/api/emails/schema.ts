import { z } from "zod";

const schema = z.object({
  firstname: z.string().min(3).max(20),
  lastname: z.string().min(3).max(30),
  email: z.string().email(),
  telephoneNumber: z.string().max(20),
  message: z.string().min(2).max(200),
});

export default schema;