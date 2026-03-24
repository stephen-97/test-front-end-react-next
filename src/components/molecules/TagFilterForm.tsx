'use client';

import TagCheckbox from '@/src/components/atoms/TagCheckbox';

interface TagFilterFormProps {
  tags: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

export default function TagFilterForm({
  tags,
  selected,
  onChange,
}: TagFilterFormProps) {
  function handleChange(tag: string, checked: boolean) {
    if (checked) {
      onChange([...selected, tag]);
    } else {
      onChange(selected.filter((t) => t !== tag));
    }
  }

  return (
    <form
      aria-labelledby="filter-title"
      aria-describedby="filter-desc"
      className="flex flex-col gap-3"
    >
      <h2
        id="filter-title"
        className="text-sm font-semibold uppercase tracking-wide text-gray-500"
      >
        Filtrer
      </h2>
      <span id="filter-desc" className="sr-only">
        Filtrer les produits par tag
      </span>
      <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
        {tags.map((tag) => (
          <li key={tag}>
            <TagCheckbox
              label={tag}
              checked={selected.includes(tag)}
              onChange={handleChange}
            />
          </li>
        ))}
      </ul>
    </form>
  );
}
