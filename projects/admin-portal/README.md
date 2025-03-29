# DataInsight Admin Portal

This is the admin management interface for the DataInsight platform. It allows administrators to manage users, system configurations, feature flags, and monitor platform usage.

## Features

- User management
- System configuration
- Feature flag management
- Access request approval
- Audit logs

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

Create a `.env` file in this directory with the following variables:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```