'use client';

import clsx from 'clsx';

interface TagCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (tag: string, checked: boolean) => void;
}

export default function TagCheckbox({
  label,
  checked,
  onChange,
}: TagCheckboxProps) {
  return (
    <label
      className={clsx(
        'cursor-pointer select-none rounded-full border px-3 py-1.5 text-sm font-medium transition-colors',
        'active:bg-[var(--color-primary-active)]',
        'has-[:focus-visible]:bg-[var(--color-primary-focus)] has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[var(--color-primary)]',
        {
          'border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-on-primary)]':
            checked,
          'border-gray-300 bg-white text-gray-600 hover:border-[var(--color-primary-text)] hover:text-[var(--color-primary-text)]':
            !checked,
        },
      )}
    >
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={(e) => onChange(label, e.target.checked)}
      />
      {checked && <span aria-hidden="true">✓ </span>}
      {label}
    </label>
  );
}
