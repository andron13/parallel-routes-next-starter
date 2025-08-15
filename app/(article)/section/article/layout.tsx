import type { ReactNode } from "react";

// Local layout for the Article subtree within the (article) route group.
// It wraps only /section/article/* pages and inherits the (article) root layout.
export default function ArticleLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto max-w-md p-6">
      <h1>Article Layout</h1>
      <div className="rounded-xl border p-6">{children}</div>
    </main>
  );
}
