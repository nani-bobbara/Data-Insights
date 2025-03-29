
# Supabase Configuration

This directory contains all Supabase-related configurations, migrations, and seeds.

## Structure

- `migrations/`: SQL migrations for schema changes
- `seeds/`: Seed data for development and testing
- `functions/`: Edge functions for custom backend logic

## Getting Started

1. Make sure you have the Supabase CLI installed
2. Link your local project to your Supabase project: `supabase link --project-ref dnalijqcgdzvlzzzpsmr`
3. Run migrations: `supabase db push`

## Migrations

When making schema changes:
1. Create a new migration file in the `migrations/` directory
2. Name it sequentially (e.g., `001-create-users.sql`, `002-add-profiles.sql`)
3. Apply the migration using the Supabase CLI

## Local Development

For local development with Supabase:
1. Start a local Supabase instance: `supabase start`
2. Connect your application using the local connection details
