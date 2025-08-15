import Link from "next/link";

export default function SectionPage() {
  return (
    <main className="space-y-6 p-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold">Section</h1>
        <p className="text-sm opacity-80">
          This route uses its own root layout from{" "}
          <code>(section)/layout.tsx</code> and is independent from the Home and
          Article groups.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/section/article"
          className="block rounded-xl border p-5 transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <h3 className="text-lg font-medium">Go to Article</h3>
          <p className="text-sm opacity-80">
            /section/article — has its own root layout as well.
          </p>
        </Link>

        <Link
          href="/"
          className="block rounded-xl border p-5 transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <h3 className="text-lg font-medium">Back to Home</h3>
          <p className="text-sm opacity-80">
            Home uses a different root layout.
          </p>
        </Link>
      </div>
    </main>
  );
}
