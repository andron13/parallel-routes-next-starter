# parallel-routes-next-starter

A tiny **Next.js App Router** demo that showcases **Parallel Routes** (a.k.a. slots). It renders two independent areas in the same layout and demonstrates:

- `@team` and `@analytics` slots
- `default.tsx` fallbacks for hard refresh / direct visits
- `@slot/[...catchAll]/page.tsx` to clear the *other* slot on navigation

## Tech Stack
- Next.js (App Router)
- React + TypeScript
- No backend, no extra UI libraries required

## Why
Parallel routes let you compose split views, tabs, and modal-overlays without reloading the whole page. Each slot updates independently while sharing a parent layout.

## Quick Start
```bash
npm i
npm run dev
# open http://localhost:3000
```

## Routes to try
- `/dashboard` – both slots show their `default.tsx`
- `/dashboard/members` – fills **Team** slot; **Analytics** is cleared
- `/dashboard/visitors` – fills **Analytics** slot; **Team** is cleared

## Project Structure (core parts)
```
app/
  layout.tsx
  page.tsx
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

## Concepts (1‑liners)
- **Parallel Route / Slot**: a folder named `@slotName`; rendered via a prop with the same name in the parent layout.
- **`default.tsx`**: what to show when a slot doesn’t match the current URL (e.g., refresh/direct link).
- **`[...catchAll]`** in a slot: matches “foreign” segments and returns `null` to reset/clear that slot.

## License
MIT
