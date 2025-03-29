
# DataInsight Platform

This repository contains the DataInsight Platform, a comprehensive data analytics solution built as a microservices architecture with three independent React applications.

## Repository Structure

```
datainsight-platform/
├── .github/                    # GitHub actions and workflows
│   └── workflows/              # CI/CD pipeline configurations
├── packages/                   # Shared packages and utilities
│   ├── common/                 # Common utilities and shared components
│   │   ├── src/                # Source code
│   │   └── package.json        # Package configuration
│   └── ui-components/          # Shared UI component library
│       ├── src/                # Source code
│       └── package.json        # Package configuration
├── projects/                   # Main application projects
│   ├── web-portal/             # Public-facing marketing website
│   │   ├── public/             # Static assets
│   │   ├── src/                # Source code
│   │   │   ├── api/            # API integration
│   │   │   ├── assets/         # Project assets
│   │   │   ├── components/     # React components
│   │   │   ├── hooks/          # Custom React hooks
│   │   │   ├── pages/          # Page components
│   │   │   ├── store/          # State management
│   │   │   ├── types/          # TypeScript type definitions
│   │   │   ├── utils/          # Utility functions
│   │   │   ├── App.tsx         # Main App component
│   │   │   ├── index.tsx       # Entry point
│   │   │   └── vite-env.d.ts   # Vite types
│   │   ├── Dockerfile          # Docker configuration
│   │   ├── index.html          # HTML entry
│   │   ├── package.json        # Dependencies and scripts
│   │   ├── tsconfig.json       # TypeScript configuration
│   │   └── vite.config.ts      # Vite configuration
│   ├── user-portal/            # User dashboard application
│   │   ├── ...                 # Similar structure to web-portal
│   └── admin-portal/           # Admin management application
│       ├── ...                 # Similar structure to web-portal
├── supabase/                   # Supabase configuration
│   ├── migrations/             # SQL migrations
│   ├── seeds/                  # Seed data
│   └── functions/              # Edge functions
├── docker-compose.yml          # Docker Compose configuration for local development
├── package.json                # Root package.json for workspace configuration
└── README.md                   # Repository documentation
```

## Setup Instructions

### Prerequisites

- Node.js 18 or newer
- Docker and Docker Compose
- Supabase CLI (for local development with Supabase)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-org/datainsight-platform.git
   cd datainsight-platform
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development environment
   ```bash
   docker-compose up
   ```

4. Access the applications:
   - Web Portal: http://localhost:3000
   - User Portal: http://localhost:3001
   - Admin Portal: http://localhost:3002

## Development Workflow

### Running Individual Projects

```bash
# Start web-portal in development mode
cd projects/web-portal
npm run dev

# Start user-portal in development mode
cd projects/user-portal
npm run dev

# Start admin-portal in development mode
cd projects/admin-portal
npm run dev
```

### Building for Production

```bash
# Build web-portal for production
cd projects/web-portal
npm run build

# Build user-portal for production
cd projects/user-portal
npm run build

# Build admin-portal for production
cd projects/admin-portal
npm run build
```

## Supabase Integration

This project uses Supabase for backend services, including:
- Authentication
- Database
- Storage
- Edge Functions

### Local Development with Supabase

1. Install Supabase CLI
2. Start a local Supabase instance
   ```bash
   supabase start
   ```
3. Apply migrations
   ```bash
   supabase db push
   ```
