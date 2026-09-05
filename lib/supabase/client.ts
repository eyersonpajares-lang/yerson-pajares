import { createBrowserClient } from "@supabase/ssr";

/**
 * Client Component Supabase client. Reads the public URL + publishable
 * key only — never the service role key, which must stay server-only.
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );
}
