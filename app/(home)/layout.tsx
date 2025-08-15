import type { ReactNode } from "react";

// Independent layout for the (home) route group.
// Applies only to routes under / and does not affect other route groups.
export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1>Home Layout</h1>
      <div className="rounded-xl border p-6">{children}</div>
    </main>
  );
}
