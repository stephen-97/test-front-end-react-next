'use client';

import clsx from 'clsx';

interface TagCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (tag: string, checked: boolean) => void;
}

export default function TagCheckbox({ label, checked, onChange }: TagCheckboxProps) {
  return (
    <label
      className={clsx('tag-checkbox', {
        'border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-on-primary)]':
          checked,
        'border-gray-300 bg-white text-gray-600 hover:border-[var(--color-primary-text)] hover:text-[var(--color-primary-text)]':
          !checked,
      })}
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
