// app/(home)/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="space-y-8 p-6">
      <h1 className="text-2xl font-semibold">Project Playground</h1>
      <p className="text-sm opacity-80">
        Быстрые ссылки для проверки разных паттернов App Router.
      </p>

      {/* Variant A: Parallel Routes with catch-all reset */}
      <section className="space-y-3">
        <h2 className="text-lg font-medium">
          Variant A — Parallel Routes (catch‑all reset)
        </h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <Link className="underline" href="/dashboard">
              /dashboard
            </Link>
          </li>
          <li>
            <Link className="underline" href="/dashboard/members">
              /dashboard/members
            </Link>
          </li>
          <li>
            <Link className="underline" href="/dashboard/visitors">
              /dashboard/visitors
            </Link>
          </li>
        </ul>
      </section>

      {/* Variant B: Независимые layouts*/}

      <section className="space-y-3">
        <h2 className="text-lg font-medium">Route Groups — Sections</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <Link className="underline" href="/section">
              /section
            </Link>
          </li>
          <li>
            <Link className="underline" href="/section/article">
              /section/article
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
