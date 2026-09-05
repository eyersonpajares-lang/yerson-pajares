import type { ReactNode } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { logout } from "../actions";

export default async function AdminDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  return (
    <div className="flex min-h-screen flex-col bg-paper md:flex-row">
      <aside className="flex items-center justify-between border-b border-line p-4 md:w-56 md:shrink-0 md:flex-col md:items-stretch md:justify-between md:border-b-0 md:border-r md:p-6">
        <div className="flex items-center justify-between md:block">
          <p className="font-display text-lg tracking-tight">Admin</p>
          <nav className="hidden md:mt-8 md:flex md:flex-col md:gap-1">
            <Link href="/admin" className="pl-3 text-sm hover:text-accent">
              Dashboard
            </Link>
            <Link href="/admin/projects" className="pl-3 text-sm hover:text-accent">
              Projects
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted md:mt-10 md:flex-col md:items-start md:gap-3">
          <p className="hidden truncate md:block">{user.email}</p>
          <Link href="/" target="_blank" className="hover:text-ink">
            Ver sitio ↗
          </Link>
          <form action={logout}>
            <button type="submit" className="hover:text-ink">
              Cerrar sesión
            </button>
          </form>
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-10">{children}</main>
    </div>
  );
}
