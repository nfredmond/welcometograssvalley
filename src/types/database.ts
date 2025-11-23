export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type TablesInsert<T extends { Row: unknown; Insert: unknown }> = T["Insert"];
export type TablesUpdate<T extends { Row: unknown; Update: unknown }> = T["Update"];
export type TablesRow<T extends { Row: unknown }> = T["Row"];

export type Database = {
  public: {
    Tables: {
      episodes: {
        Row: {
          id: string;
          rss_guid: string;
          episode_number: number | null;
          title: string;
          slug: string;
          description: string | null;
          published_at: string | null;
          audio_url: string | null;
          duration_seconds: number | null;
          image_url: string | null;
          tags: string[] | null;
          guest_summary: string | null;
          transcript: string | null;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: {
          id?: string;
          rss_guid: string;
          episode_number?: number | null;
          title: string;
          slug: string;
          description?: string | null;
          published_at?: string | null;
          audio_url?: string | null;
          duration_seconds?: number | null;
          image_url?: string | null;
          tags?: string[] | null;
          guest_summary?: string | null;
          transcript?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["episodes"]["Insert"]>;
        Relationships: [];
      };
      guests: {
        Row: {
          id: string;
          name: string;
          slug: string;
          role: string | null;
          bio: string | null;
          photo_url: string | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          role?: string | null;
          bio?: string | null;
          photo_url?: string | null;
          created_at?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["guests"]["Insert"]>;
        Relationships: [];
      };
      episode_guests: {
        Row: {
          episode_id: string;
          guest_id: string;
        };
        Insert: {
          episode_id: string;
          guest_id: string;
        };
        Update: Partial<Database["public"]["Tables"]["episode_guests"]["Insert"]>;
        Relationships: [];
      };
      resources: {
        Row: {
          id: string;
          title: string;
          description: string | null;
          url: string;
          category: string | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          title: string;
          description?: string | null;
          url: string;
          category?: string | null;
          created_at?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["resources"]["Insert"]>;
        Relationships: [];
      };
      sponsors: {
        Row: {
          id: string;
          name: string;
          tier: string | null;
          logo_url: string | null;
          website: string | null;
          starts_at: string | null;
          ends_at: string | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          name: string;
          tier?: string | null;
          logo_url?: string | null;
          website?: string | null;
          starts_at?: string | null;
          ends_at?: string | null;
          created_at?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["sponsors"]["Insert"]>;
        Relationships: [];
      };
      site_settings: {
        Row: {
          id: string;
          tagline: string | null;
          hero_subtitle: string | null;
          manifesto: string | null;
          social_links: Json | null;
          newsletter_embed_html: string | null;
          hero_cta_label: string | null;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: {
          id?: string;
          tagline?: string | null;
          hero_subtitle?: string | null;
          manifesto?: string | null;
          social_links?: Json | null;
          newsletter_embed_html?: string | null;
          hero_cta_label?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["site_settings"]["Insert"]>;
        Relationships: [];
      };
      forms_contact: {
        Row: {
          id: string;
          name: string | null;
          email: string | null;
          message: string | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          name?: string | null;
          email?: string | null;
          message?: string | null;
          created_at?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["forms_contact"]["Insert"]>;
        Relationships: [];
      };
      forms_guest_submissions: {
        Row: {
          id: string;
          name: string | null;
          email: string | null;
          nominee_details: string | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          name?: string | null;
          email?: string | null;
          nominee_details?: string | null;
          created_at?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["forms_guest_submissions"]["Insert"]>;
        Relationships: [];
      };
      forms_sponsor_inquiries: {
        Row: {
          id: string;
          organization: string | null;
          contact_name: string | null;
          email: string | null;
          message: string | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          organization?: string | null;
          contact_name?: string | null;
          email?: string | null;
          message?: string | null;
          created_at?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["forms_sponsor_inquiries"]["Insert"]>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
};

