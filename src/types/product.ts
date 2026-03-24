import { z } from 'zod';

export const ProductSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  price: z.number().min(0),
  imageUrl: z.string(),
  tags: z.array(z.string()),
  updatedAt: z.iso.datetime(),
});

export type Product = z.infer<typeof ProductSchema>;
