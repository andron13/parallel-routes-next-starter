# parallel-routes-next-starter — 3 root layouts (Route Groups)

This branch demonstrates three independent **root layouts** using **Route Groups** in the Next.js App Router. Each top‑level group provides its own `<html>/<body>` shell and does **not** inherit from the others, while URLs remain clean.

## What it shows

- Three top-level route groups: `(home)`, `(section)`, `(article)`
- Separate `layout.tsx` per area (no shared `app/layout.tsx`)
- Group names in parentheses **do not** appear in the URL

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- No backend required

## Quick Start

```bash
npm i
npm run dev
# open http://localhost:3000
```

## Routes to try

- `/` — **Home** (Layout A)
- `/section` — **Section** (Layout B) _(or `/раздел` if you prefer Cyrillic slug)_
- `/section/article` — **Article** (Layout C) _(or `/раздел/статья`)_

## Directory structure (core parts)

```
app/
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

## Notes

- Do **not** create `app/layout.tsx` in the root — it would wrap everything and defeat the purpose of separate roots.
- Define each concrete route in **one** group only (e.g., `/section` exists only under `(section)`).
- You can still use Parallel Routes, Intercepting Routes, etc., **inside** any of these groups.

## More resources

- Next.js Route Groups — https://nextjs.org/docs/app/building-your-application/routing/route-groups
- Next.js Layouts — https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts

## License

MIT
