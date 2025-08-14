import Link from "next/link";

export default function Home() {
    return (
        <main className="p-6 space-y-6">
            <h1 className="text-2xl font-semibold">Project Playground</h1>
            <p className="text-sm opacity-80">Быстрые ссылки для проверки параллельных маршрутов.</p>

            <nav className="space-y-4">
                <section>
                    <h2 className="text-lg font-medium">Dashboard (Parallel Routes)</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>
                            <Link className="underline" href="/dashboard">/dashboard</Link>
                        </li>
                        <li>
                            <Link className="underline" href="/dashboard/members">/dashboard/members</Link>
                        </li>
                        <li>
                            <Link className="underline" href="/dashboard/visitors">/dashboard/visitors</Link>
                        </li>
                    </ul>
                </section>
            </nav>
        </main>
    );
}
