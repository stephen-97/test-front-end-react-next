import { getProducts, getTags } from '@/src/lib/products';
import ProductsSection from '@/src/components/templates/ProductsSection';

export default async function ProductsPage() {
  const products = getProducts();
  const tags = getTags();

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section>
        <h1 className="mb-8 text-2xl font-bold text-gray-900">Nos produits</h1>
        <ProductsSection products={products} tags={tags} />
      </section>
    </main>
  );
}
