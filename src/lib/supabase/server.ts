import { createClient as createSupabaseClient, SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database";
import { getSupabaseConfig } from "./env";

export function createServerClient(): SupabaseClient<Database> | null {
  const config = getSupabaseConfig();
  if (!config) return null;

  return createSupabaseClient<Database>(config.url, config.anonKey);
}
