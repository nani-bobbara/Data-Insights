export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      access_requests: {
        Row: {
          access_token: string | null
          company: string | null
          created_at: string
          email: string
          id: string
          message: string | null
          name: string
          reconsidered_at: string | null
          reconsidered_by: string | null
          responded_at: string | null
          response_message: string | null
          revoked_at: string | null
          revoked_by: string | null
          status: string
          updated_at: string | null
        }
        Insert: {
          access_token?: string | null
          company?: string | null
          created_at?: string
          email: string
          id?: string
          message?: string | null
          name: string
          reconsidered_at?: string | null
          reconsidered_by?: string | null
          responded_at?: string | null
          response_message?: string | null
          revoked_at?: string | null
          revoked_by?: string | null
          status?: string
          updated_at?: string | null
        }
        Update: {
          access_token?: string | null
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          message?: string | null
          name?: string
          reconsidered_at?: string | null
          reconsidered_by?: string | null
          responded_at?: string | null
          response_message?: string | null
          revoked_at?: string | null
          revoked_by?: string | null
          status?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      ap_audit_logs: {
        Row: {
          action_type: string
          created_at: string
          details: Json | null
          id: string
          ip_address: string | null
          resource_id: string | null
          resource_type: string
          user_id: string | null
        }
        Insert: {
          action_type: string
          created_at?: string
          details?: Json | null
          id?: string
          ip_address?: string | null
          resource_id?: string | null
          resource_type: string
          user_id?: string | null
        }
        Update: {
          action_type?: string
          created_at?: string
          details?: Json | null
          id?: string
          ip_address?: string | null
          resource_id?: string | null
          resource_type?: string
          user_id?: string | null
        }
        Relationships: []
      }
      ap_feature_flags: {
        Row: {
          available_plans: string[] | null
          created_at: string
          description: string | null
          feature_key: string
          id: string
          is_active: boolean | null
          name: string
          updated_at: string
        }
        Insert: {
          available_plans?: string[] | null
          created_at?: string
          description?: string | null
          feature_key: string
          id?: string
          is_active?: boolean | null
          name: string
          updated_at?: string
        }
        Update: {
          available_plans?: string[] | null
          created_at?: string
          description?: string | null
          feature_key?: string
          id?: string
          is_active?: boolean | null
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      ap_system_configs: {
        Row: {
          config_key: string
          config_value: Json
          created_at: string
          description: string | null
          id: string
          updated_at: string
        }
        Insert: {
          config_key: string
          config_value: Json
          created_at?: string
          description?: string | null
          id?: string
          updated_at?: string
        }
        Update: {
          config_key?: string
          config_value?: Json
          created_at?: string
          description?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      feature_flags: {
        Row: {
          created_at: string
          description: string
          enabled_plans: string[]
          id: string
          is_active: boolean
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description: string
          enabled_plans?: string[]
          id?: string
          is_active?: boolean
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          enabled_plans?: string[]
          id?: string
          is_active?: boolean
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      file_uploads: {
        Row: {
          created_at: string
          file_path: string
          file_size: number
          filename: string
          id: string
          metadata: Json | null
          mime_type: string
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          file_path: string
          file_size: number
          filename: string
          id?: string
          metadata?: Json | null
          mime_type: string
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          file_path?: string
          file_size?: number
          filename?: string
          id?: string
          metadata?: Json | null
          mime_type?: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      landing_page_features: {
        Row: {
          created_at: string
          description: string
          display_order: number
          feature_key: string | null
          icon: string
          id: string
          image_path: string | null
          is_featured: boolean
          is_toggleable: boolean | null
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description: string
          display_order: number
          feature_key?: string | null
          icon: string
          id?: string
          image_path?: string | null
          is_featured?: boolean
          is_toggleable?: boolean | null
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          display_order?: number
          feature_key?: string | null
          icon?: string
          id?: string
          image_path?: string | null
          is_featured?: boolean
          is_toggleable?: boolean | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      landing_page_stats: {
        Row: {
          created_at: string
          display_order: number
          icon: string
          id: string
          stat_label: string
          stat_value: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          display_order: number
          icon: string
          id?: string
          stat_label: string
          stat_value: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          display_order?: number
          icon?: string
          id?: string
          stat_label?: string
          stat_value?: string
          updated_at?: string
        }
        Relationships: []
      }
      landing_page_steps: {
        Row: {
          color: string
          created_at: string
          description: string
          display_order: number
          icon: string
          id: string
          image_path: string
          step_number: string
          title: string
          updated_at: string
        }
        Insert: {
          color: string
          created_at?: string
          description: string
          display_order: number
          icon: string
          id?: string
          image_path: string
          step_number: string
          title: string
          updated_at?: string
        }
        Update: {
          color?: string
          created_at?: string
          description?: string
          display_order?: number
          icon?: string
          id?: string
          image_path?: string
          step_number?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          company: string | null
          created_at: string
          first_name: string | null
          id: string
          last_name: string | null
          role: string | null
          subscription_plan: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          company?: string | null
          created_at?: string
          first_name?: string | null
          id: string
          last_name?: string | null
          role?: string | null
          subscription_plan?: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          company?: string | null
          created_at?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          role?: string | null
          subscription_plan?: string
          updated_at?: string
        }
        Relationships: []
      }
      secure_access_links: {
        Row: {
          created_at: string
          created_by: string
          expires_at: string
          id: string
          is_used: boolean
          token: string
          used_at: string | null
          used_by: string | null
        }
        Insert: {
          created_at?: string
          created_by: string
          expires_at: string
          id?: string
          is_used?: boolean
          token: string
          used_at?: string | null
          used_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          expires_at?: string
          id?: string
          is_used?: boolean
          token?: string
          used_at?: string | null
          used_by?: string | null
        }
        Relationships: []
      }
      system_activities: {
        Row: {
          description: string
          event_type: string
          icon: string
          id: string
          timestamp: string
          user_id: string | null
        }
        Insert: {
          description: string
          event_type: string
          icon: string
          id?: string
          timestamp?: string
          user_id?: string | null
        }
        Update: {
          description?: string
          event_type?: string
          icon?: string
          id?: string
          timestamp?: string
          user_id?: string | null
        }
        Relationships: []
      }
      up_dashboard_configs: {
        Row: {
          created_at: string
          id: string
          is_default: boolean | null
          layout: Json
          name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_default?: boolean | null
          layout?: Json
          name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_default?: boolean | null
          layout?: Json
          name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "up_dashboard_configs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "up_user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      up_user_profiles: {
        Row: {
          company: string | null
          created_at: string
          first_name: string | null
          id: string
          is_active: boolean | null
          last_name: string | null
          position: string | null
          subscription_level: string | null
          updated_at: string
        }
        Insert: {
          company?: string | null
          created_at?: string
          first_name?: string | null
          id: string
          is_active?: boolean | null
          last_name?: string | null
          position?: string | null
          subscription_level?: string | null
          updated_at?: string
        }
        Update: {
          company?: string | null
          created_at?: string
          first_name?: string | null
          id?: string
          is_active?: boolean | null
          last_name?: string | null
          position?: string | null
          subscription_level?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      wp_access_requests: {
        Row: {
          company: string | null
          created_at: string
          email: string
          id: string
          message: string | null
          name: string
          status: string
          updated_at: string
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          id?: string
          message?: string | null
          name: string
          status?: string
          updated_at?: string
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          message?: string | null
          name?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      wp_landing_content: {
        Row: {
          created_at: string
          description: string | null
          display_order: number
          id: string
          is_active: boolean | null
          section_key: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          display_order: number
          id?: string
          is_active?: boolean | null
          section_key: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          display_order?: number
          id?: string
          is_active?: boolean | null
          section_key?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_admin: {
        Args: {
          user_id: string
        }
        Returns: boolean
      }
      log_audit_event: {
        Args: {
          user_id: string
          action_type: string
          resource_type: string
          resource_id: string
          details: Json
          ip_address: string
        }
        Returns: string
      }
    }
    Enums: {
      app_role: "admin" | "user" | "moderator"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
