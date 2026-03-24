import Image from 'next/image';
import type { Product } from '@/src/types/product';
import Tag from '@/src/components/atoms/Tag';
import ProductPrice from '@/src/components/atoms/ProductPrice';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
      <div className="relative aspect-square w-full max-w-[400px]">
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          sizes="400px"
          priority
          className="rounded-lg object-cover"
        />
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
        <p className="text-gray-600">{product.description}</p>

        <ul className="m-0 flex list-none flex-wrap gap-x-2 gap-y-3 p-0">
          {product.tags.map((tag) => (
            <li key={tag}>
              <Tag label={tag} />
            </li>
          ))}
        </ul>

        <div>
          <ProductPrice price={product.price} className="text-lg" />
        </div>
      </div>
    </div>
  );
}
