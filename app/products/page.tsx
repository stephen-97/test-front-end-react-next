import type { Metadata } from 'next';
import { getProducts, getTags } from '@/src/lib/products';
import ProductsSection from '@/src/components/templates/ProductsSection';

export const metadata: Metadata = {
  title: 'Nos produits',
  description: 'Découvrez notre gamme complète de produits financiers.',
};

export default async function ProductsPage() {
  const products = getProducts();
  const tags = getTags();

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section>
        <h1 className="mb-8 text-3xl font-bold text-gray-900">Nos produits</h1>
        <ProductsSection products={products} tags={tags} />
      </section>
    </main>
  );
}
