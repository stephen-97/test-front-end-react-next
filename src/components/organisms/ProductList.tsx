import type { Product } from '@/src/types/product';
import ProductCard from '@/src/components/molecules/ProductCard';

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <ul
      aria-live={'polite'}
      className="grid list-none grid-cols-1 gap-6 p-0 [&>li]:mx-auto [&>li]:w-full [&>li]:max-w-[400px] sm:grid-cols-2 lg:grid-cols-3"
    >
      {products.map((product, index) => (
        <li key={product.id} className="flex">
          <ProductCard product={product} priority={index < 3} />
        </li>
      ))}
    </ul>
  );
}
