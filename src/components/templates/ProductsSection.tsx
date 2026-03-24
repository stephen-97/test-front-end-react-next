'use client';

import { useState } from 'react';
import type { Product } from '@/src/types/product';
import TagFilterForm from '@/src/components/molecules/TagFilterForm';
import ProductList from '@/src/components/organisms/ProductList';

interface ProductsSectionProps {
  products: Product[];
  tags: string[];
}

export default function ProductsSection({
  products,
  tags,
}: ProductsSectionProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filtered =
    selectedTags.length === 0
      ? products
      : products.filter((p) =>
          selectedTags.some((tag) => p.tags.includes(tag)),
        );

  return (
    <div className="flex w-full flex-col gap-8">
      <TagFilterForm
        tags={tags}
        selected={selectedTags}
        onChange={setSelectedTags}
      />
      <ProductList products={filtered} />
    </div>
  );
}
