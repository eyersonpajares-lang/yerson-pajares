import type { Metadata } from "next";
import { login } from "../../actions";

export const metadata: Metadata = {
  title: "Admin login",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage(props: PageProps<"/admin/login">) {
  const { error } = await props.searchParams;
  const errorMessage = typeof error === "string" ? error : undefined;

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-6">
      <div className="w-full max-w-sm">
        <p className="font-display text-2xl tracking-tight">Yerson Pajares</p>
        <h1 className="mt-1 font-mono text-xs uppercase tracking-wide text-muted">
          Admin
        </h1>

        <form action={login} className="mt-10 flex flex-col gap-6">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="font-mono text-xs uppercase tracking-wide text-muted">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="border-b border-line bg-transparent py-2 text-base text-ink outline-none focus:border-ink"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="font-mono text-xs uppercase tracking-wide text-muted">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="border-b border-line bg-transparent py-2 text-base text-ink outline-none focus:border-ink"
            />
          </div>

          {errorMessage && (
            <p className="text-sm text-accent" role="alert">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            className="mt-2 border border-ink bg-ink px-5 py-3 text-sm font-medium tracking-wide text-paper transition-colors hover:bg-ink-soft"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
