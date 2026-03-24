import type { Product } from '@/src/types/product';
import ProductCard from '@/src/components/molecules/ProductCard';

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  if (products.length === 0) {
    return (
      <p aria-live="polite" className="text-gray-500">
        Aucun produit ne correspond à votre sélection.
      </p>
    );
  }

  return (
    <ul
      aria-live={'polite'}
      className="grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3"
    >
      {products.map((product) => (
        <li key={product.id} className="flex">
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
