import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductSchema } from '@/src/types/product';
import ProductDetail from '@/src/components/templates/ProductDetail';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string) {
  const res = await fetch(`http://localhost:3000/api/products/${slug}`);

  if (!res.ok) return null;

  const data = await res.json();
  return ProductSchema.parse(data);
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) return {};

  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) notFound();

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <ProductDetail product={product} />
    </main>
  );
}
