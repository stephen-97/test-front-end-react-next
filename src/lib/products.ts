import { z } from 'zod';
import { ProductSchema, type Product } from '@/src/types/product';

const products: Product[] = z.array(ProductSchema).parse([
  {
    id: 'pdt_1',
    slug: 'assurance-vie-avenir',
    title: 'Assurance Vie Avenir',
    description: 'Un contrat souple pour préparer vos projets à long terme.',
    price: 0,
    imageUrl: '/images/assurance-vie-avenir.jpg',
    tags: ['assurance-vie', 'long-terme'],
    updatedAt: '2025-08-20T10:15:00.000Z',
  },
  {
    id: 'pdt_2',
    slug: 'pea-dynamique',
    title: 'PEA Dynamique',
    description: "Un plan d'épargne en actions orienté performance.",
    price: 2.5,
    imageUrl: '/images/pea-dynamique.jpg',
    tags: ['pea', 'actions'],
    updatedAt: '2025-08-21T14:03:00.000Z',
  },
  {
    id: 'pdt_3',
    slug: 'per-retraite',
    title: 'PER Retraite',
    description: 'Préparez votre retraite avec un cadre fiscal avantageux.',
    price: 1.0,
    imageUrl: '/images/per-retraite.jpg',
    tags: ['per', 'retraite'],
    updatedAt: '2025-08-22T09:00:00.000Z',
  },
]);

export function getProducts(): Product[] {
  return [...products].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
  );
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getTags(): string[] {
  return [...new Set(products.flatMap((product) => product.tags))];
}
