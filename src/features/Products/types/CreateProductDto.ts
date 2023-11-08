import { z } from "zod";

export const validationSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  price: z.number().positive({ message: "Price must be be positive 😄" }),
});

// validationSchema.parse()

// type Validation = typeof validationSchema;
export type CreateProductDto = z.infer<typeof validationSchema>;
