import Link from "next/link";

import type { ReactNode } from "react";

/**
 * DashboardLayout demonstrates Parallel Routes:
 * - Slot "team" renders content from app/(dashboard)/dashboard/@team/*
 * - Slot "analytics" renders content from app/(dashboard)/dashboard/@analytics/*
 * - Each slot should have a default.tsx for hard refresh / direct visits.
 */

type DashboardLayoutProps = {
  children: ReactNode;
  team: ReactNode;
  analytics: ReactNode;
};

export default function DashboardLayout({
  children,
  team,
  analytics,
}: DashboardLayoutProps) {
  return (
    <main className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Team</h2>
        <nav aria-label="Team navigation">
          <ul className="flex gap-3 text-sm">
            <li>
              <Link className="underline" href="/dashboard/members">
                Members
              </Link>
            </li>
          </ul>
        </nav>
        <div className="rounded border p-4">{team}</div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Analytics</h2>
        <nav aria-label="Analytics navigation">
          <ul className="flex gap-3 text-sm">
            <li>
              <Link className="underline" href="/dashboard/visitors">
                Visitors
              </Link>
            </li>
          </ul>
        </nav>
        <div className="rounded border p-4">{analytics}</div>
      </section>

      {/* Optional shared area under both slots */}
      <section className="md:col-span-2">{children}</section>
    </main>
  );
}
