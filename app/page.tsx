import Link from 'next/link';
import clsx from 'clsx';

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="flex flex-col items-start gap-6">
        <h1 className="text-5xl font-bold text-gray-900">Bienvenue</h1>
        <Link
          href="/products"
          className={clsx(
            'rounded-md border-2 border-black bg-white px-6 py-3 font-semibold text-[var(--color-primary-text)] transition-colors',
            'hover:bg-[var(--color-primary-subtle)]',
            'active:bg-[var(--color-primary-active)]',
            'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]',
          )}
        >
          Voir nos produits
        </Link>
      </section>
    </main>
  );
}
