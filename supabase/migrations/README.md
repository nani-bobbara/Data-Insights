
# Supabase Migrations

This directory contains SQL migrations for the Supabase database schema.

## Migration Files

Migrations are applied in sequential order based on the file prefix (e.g., 001, 002).

Each migration should:
- Be idempotent when possible
- Include both "up" (apply) and "down" (rollback) operations
- Be properly commented to explain the changes

## Creating New Migrations

When adding a new migration:
1. Create a new SQL file with the next sequential number
2. Include a descriptive name in the filename
3. Document the purpose of the migration with comments
4. Test the migration on a development database before applying to production
