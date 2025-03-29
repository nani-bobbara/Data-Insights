
-- Initial schema setup for DataInsight Platform
-- Creates base tables for all three portals

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create app_role enum if it doesn't exist
DO $$ BEGIN
    CREATE TYPE public.app_role AS ENUM ('admin', 'user', 'moderator');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- Helper function for updated_at timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- User profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    first_name TEXT,
    last_name TEXT,
    company TEXT,
    role TEXT,
    subscription_plan TEXT NOT NULL DEFAULT 'free',
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- User roles table
CREATE TABLE IF NOT EXISTS public.user_roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    role app_role NOT NULL DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    UNIQUE(user_id, role)
);

-- Create trigger for updated_at columns
CREATE TRIGGER update_user_roles_updated_at
BEFORE UPDATE ON public.user_roles
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Enable RLS on tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Set up RLS policies
CREATE POLICY "Users can view their own profile"
    ON public.profiles
    FOR SELECT
    USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
    ON public.profiles
    FOR UPDATE
    USING (auth.uid() = id);

-- Create function to check if user is admin
CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  admin_role_exists BOOLEAN;
BEGIN
  SELECT EXISTS (
    SELECT 1 FROM user_roles
    WHERE user_id = $1 AND role = 'admin'
  ) INTO admin_role_exists;
  
  RETURN admin_role_exists;
END;
$$;

-- Set up trigger for new user profiles
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, first_name, last_name)
  VALUES (new.id, new.raw_user_meta_data->>'first_name', new.raw_user_meta_data->>'last_name');
  
  -- Assign default user role
  INSERT INTO public.user_roles (user_id, role)
  VALUES (new.id, 'user');
  
  RETURN new;
END;
$$;

-- Trigger the function every time a user is created
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
