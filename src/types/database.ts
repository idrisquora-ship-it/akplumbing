export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.5";
  };
  public: {
    Tables: {
      contacts: {
        Row: {
          created_at: string;
          email: string | null;
          id: string;
          message: string;
          name: string;
          phone: string;
          service: string | null;
        };
        Insert: {
          created_at?: string;
          email?: string | null;
          id?: string;
          message: string;
          name: string;
          phone: string;
          service?: string | null;
        };
        Update: {
          created_at?: string;
          email?: string | null;
          id?: string;
          message?: string;
          name?: string;
          phone?: string;
          service?: string | null;
        };
        Relationships: [];
      };
      projects: {
        Row: {
          category: string;
          created_at: string;
          id: string;
          image_url: string;
          title: string;
        };
        Insert: {
          category: string;
          created_at?: string;
          id?: string;
          image_url: string;
          title: string;
        };
        Update: {
          category?: string;
          created_at?: string;
          id?: string;
          image_url?: string;
          title?: string;
        };
        Relationships: [];
      };
      testimonials: {
        Row: {
          created_at: string;
          id: string;
          location: string | null;
          message: string;
          name: string;
          rating: number;
        };
        Insert: {
          created_at?: string;
          id?: string;
          location?: string | null;
          message: string;
          name: string;
          rating: number;
        };
        Update: {
          created_at?: string;
          id?: string;
          location?: string | null;
          message?: string;
          name?: string;
          rating?: number;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

export type Contact = Database["public"]["Tables"]["contacts"]["Row"];
export type Testimonial = Database["public"]["Tables"]["testimonials"]["Row"];
export type Project = Database["public"]["Tables"]["projects"]["Row"];
