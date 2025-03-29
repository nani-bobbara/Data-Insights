# Supabase Configuration

This directory contains all Supabase-related configurations for the DataInsight platform.

## Structure

- `/migrations`: SQL migrations for database schema changes
- `/seeds`: Seed data for development and testing
- `/functions`: Edge functions for server-side logic

## Getting Started

1. Install the Supabase CLI:
   ```bash
   npm install -g supabase
   ```

2. Start a local Supabase instance:
   ```bash
   supabase start
   ```

3. Apply migrations:
   ```bash
   supabase db push
   ```

4. Seed the database (if needed):
   ```bash
   supabase db seed
   ```

## Migrations

Migrations are stored in SQL files in the `/migrations` directory. They are applied in alphabetical order, so it's recommended to prefix them with a timestamp or sequence number.

## Edge Functions

Edge functions provide server-side logic without managing server infrastructure. They can be deployed using the Supabase CLI:

```bash
supabase functions deploy my-function
```