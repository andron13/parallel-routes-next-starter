# parallel-routes-next-starter

Two small **Next.js App Router** demos in one repo:

- **Demo A — Parallel Routes (slots):** dashboard with two independent areas using `@team` and `@analytics`, `default.tsx` fallbacks, and a `[...]catchAll` reset.
- **Demo B — Multiple Root Layouts (Route Groups):** three independent root layouts using `(home)`, `(section)`, `(article)` (clean URLs, no shared `app/layout.tsx`).

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS (utility classes)
- Dev tooling: ESLint, Prettier, Husky, lint-staged

## Quick Start

```bash
npm i
npm run dev
# open http://localhost:3000
```

---

## Demo A — Parallel Routes (slots)

**Why:** Compose split views/tabs where each area updates independently without rerendering the entire page.

**Routes to try**

- `/dashboard` – both slots render their `default.tsx`
- `/dashboard/members` – fills **Team** slot; **Analytics** is cleared via catch‑all
- `/dashboard/visitors` – fills **Analytics** slot; **Team** is cleared via catch‑all

**Core structure**

```
app/
  (dashboard)/
    dashboard/
      layout.tsx
      page.tsx
      @team/
        default.tsx
        members/page.tsx
        [...catchAll]/page.tsx
      @analytics/
        default.tsx
        visitors/page.tsx
        [...catchAll]/page.tsx
```

**Concepts**

- **Parallel Route / Slot:** folder named `@slotName`; rendered as a prop in the parent layout.
- **`default.tsx`:** fallback for hard refresh/direct visits when a slot doesn’t match the URL.
- **`[...catchAll]` in a slot:** matches “foreign” segments and returns `null` to reset/clear that slot.

---

## Demo B — Multiple Root Layouts (Route Groups)

**Why:** Provide completely different shells (`<html>/<body>`, providers, theme) for unrelated parts of the site while keeping URLs clean.

**Routes to try**

- `/` — **Home** (root layout A)
- `/section` — **Section** (root layout B)
- `/section/article` — **Article** (root layout C)

**Core structure**

```
app/
  layout.tsx              # Global root layout (shared). Optional.
                          # If you remove it, move global imports (e.g. ./globals.css)
                          # into each group's root layout.
  (home)/
    layout.tsx            # Root layout A for /
    page.tsx              # /

  (section)/
    section/
      layout.tsx          # Root layout B for /section/*
      page.tsx            # /section

  (article)/
    section/
      article/
        layout.tsx        # Root layout C for /section/article/*
        page.tsx          # /section/article
```

**Notes**

- Do **not** create a shared `app/layout.tsx` if you want independent roots; each route group supplies its own root layout.
- Define each concrete route in **one** group only to avoid conflicts.
- You can still use Parallel Routes, Intercepting Routes, etc., _inside_ any of these groups.

---

## More resources

- Next.js Parallel Routes: [https://nextjs.org/docs/app/api-reference/file-conventions/parallel-routes](https://nextjs.org/docs/app/api-reference/file-conventions/parallel-routes)
- Route Groups: [https://nextjs.org/docs/app/building-your-application/routing/route-groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups)
- Layouts: [https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)

## License

MIT
