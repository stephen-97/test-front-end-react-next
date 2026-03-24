import { getProducts, getTags } from '@/src/lib/products';

export async function GET() {
  const products = getProducts();
  const tags = getTags();
  return Response.json({ products, tags });
}
