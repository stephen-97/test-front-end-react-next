import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductSchema } from '@/src/types/product';
import { getProducts } from '@/src/lib/products';
import ProductDetail from '@/src/components/templates/ProductDetail';

export const revalidate = 60;

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${slug}`,
    { next: { revalidate: 60 } },
  );

  if (!res.ok) return null;

  const data = await res.json();
  return ProductSchema.parse(data);
}

export async function generateStaticParams() {
  const products = getProducts();
  return products.map((product) => ({ slug: product.slug }));
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
