import { createPublicClient } from "@/lib/supabase/public";

/**
 * Supabase's free tier auto-pauses a project after 7 days with no
 * activity. Vercel Cron hits this daily so the DB never sits idle
 * long enough to trigger that, without needing a paid Supabase plan.
 */
export async function GET() {
  const supabase = createPublicClient();
  const { error } = await supabase.from("projects").select("id").limit(1);

  if (error) {
    return Response.json({ ok: false, error: error.message }, { status: 500 });
  }
  return Response.json({ ok: true, checkedAt: new Date().toISOString() });
}
