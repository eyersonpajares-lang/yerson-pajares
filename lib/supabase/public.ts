import { createClient as createSupabaseClient } from "@supabase/supabase-js";

/**
 * Stateless client for anonymous, public reads (RLS: published = true).
 * Doesn't touch cookies, so — unlike lib/supabase/server.ts — it's safe
 * to call from generateStaticParams / generateMetadata at build time,
 * where there is no incoming request to read cookies from.
 */
export function createPublicClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );
}
