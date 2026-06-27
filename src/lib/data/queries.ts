import { createServerClient } from "@/lib/supabase/server";
import type { Testimonial, Project } from "@/types/database";

export async function getTestimonials(limit?: number): Promise<Testimonial[]> {
  const supabase = createServerClient();
  if (!supabase) return [];

  let query = supabase.from("testimonials").select("*").order("created_at", { ascending: false });
  if (limit) query = query.limit(limit);

  const { data, error } = await query;
  if (error) {
    console.error("Failed to fetch testimonials:", error.message);
    return [];
  }
  return data ?? [];
}

export async function getProjects(limit?: number): Promise<Project[]> {
  const supabase = createServerClient();
  if (!supabase) return [];

  let query = supabase.from("projects").select("*").order("created_at", { ascending: false });
  if (limit) query = query.limit(limit);

  const { data, error } = await query;
  if (error) {
    console.error("Failed to fetch projects:", error.message);
    return [];
  }
  return data ?? [];
}
