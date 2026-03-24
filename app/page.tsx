import Link from 'next/link';

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="flex flex-col items-start gap-6">
        <h1 className="text-5xl font-bold text-gray-900">Bienvenue</h1>
        <Link href="/products" className="btn-primary">
          Voir nos produits
        </Link>
      </section>
    </main>
  );
}
