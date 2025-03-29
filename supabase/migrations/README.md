# Database Migrations

This directory contains SQL migrations for the DataInsight platform. Migrations are applied in order, so the naming convention is important.

## Naming Convention

Use a prefix to ensure migrations are applied in the correct order:

```
001-create-tables.sql
002-add-columns.sql
003-add-indexes.sql
```

## Running Migrations

To apply migrations:

```bash
supabase db push
```

## Important Notes

- Always test migrations locally before applying to production
- Make migrations idempotent when possible
- Consider data migration as well as schema changes
- Document any manual steps required for upgrades