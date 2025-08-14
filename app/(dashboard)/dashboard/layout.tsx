import type { ReactNode } from "react";
import Link from "next/link";

export default function DashboardLayout({
                                            children,
                                            team,
                                            analytics,
                                        }: {
    children: ReactNode;
    team: ReactNode;
    analytics: ReactNode;
}) {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <section className="space-y-3">
                <h2 className="text-xl font-semibold">Team</h2>
                <nav className="flex gap-3 text-sm">
                    <Link href="/dashboard/members" className="underline">Members</Link>
                </nav>
                <div className="rounded border p-4">{team}</div>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold">Analytics</h2>
                <nav className="flex gap-3 text-sm">
                    <Link href="/dashboard/visitors" className="underline">Visitors</Link>
                </nav>
                <div className="rounded border p-4">{analytics}</div>
            </section>

            <section className="md:col-span-2">{children}</section>
        </main>
    );
}