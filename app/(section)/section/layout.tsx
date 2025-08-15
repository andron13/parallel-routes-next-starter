import type { ReactNode } from "react";

// Independent layout for the (section) route group.
// This shell applies only to routes under /section and does not affect other groups.
export default function SectionLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto max-w-lg p-6">
      <h1>Section Layout</h1>
      <div className="rounded-xl border p-6">{children}</div>
    </main>
  );
}
