import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/src/types/product';
import Tag from '@/src/components/atoms/Tag';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({
  product,
  priority = false,
}: ProductCardProps) {
  return (
    <article className="relative flex h-full w-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all has-[a:focus-visible]:bg-primary-focus has-[a:focus-visible]:outline has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-primary has-[a:hover]:shadow-md has-[a:active]:bg-primary-active has-[a:active]:scale-[0.98] has-[a:active]:shadow-none">
      <div className="relative aspect-square w-full lg:max-w-[400px]">
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          sizes="400px"
          priority={priority}
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h2 className="text-base font-semibold text-gray-900">
          <Link
            href={`/products/${product.slug}`}
            className="after:absolute after:inset-0 after:content-[''] hover:text-[var(--color-primary-text)] focus-visible:outline-none"
          >
            {product.title}
          </Link>
        </h2>
        <p className="flex-1 text-sm text-gray-500">{product.description}</p>

        <ul className="flex flex-wrap gap-1">
          {product.tags.map((tag) => (
            <li key={tag}>
              <Tag label={tag} />
            </li>
          ))}
        </ul>

        <div className="mt-2">
          {product.price === 0 ? (
            <span className="text-sm font-semibold text-green-600">
              Sans frais
            </span>
          ) : (
            <span className="text-sm font-semibold text-gray-900">
              à partir de {product.price.toFixed(2).replace('.', ',')}€/mois
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
