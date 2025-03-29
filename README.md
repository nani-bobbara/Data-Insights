# DataInsight Platform

This repository contains the DataInsight Platform, a comprehensive data analytics solution built as a microservices architecture with three independent React applications and a supporting API service.

## Repository Structure

```
datainsight-platform/
├── .github/                    # GitHub actions and workflows
│   └── workflows/              # CI/CD pipeline configurations
├── packages/                   # Shared packages and utilities
│   ├── common/                 # Common utilities and shared components
│   └── ui-components/          # Shared UI component library
├── projects/                   # Main application projects
│   ├── web-portal/             # Public-facing marketing website
│   ├── user-portal/            # User dashboard application
│   ├── admin-portal/           # Admin management application
│   └── api-service/            # Backend API service
├── supabase/                   # Supabase configuration
│   ├── migrations/             # SQL migrations
│   ├── seeds/                  # Seed data
│   └── functions/              # Edge functions
├── docker-compose.yml          # Docker Compose configuration for local development
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

3. Set up environment variables
   ```bash
   # Copy example .env files
   cp projects/web-portal/.env.example projects/web-portal/.env
   cp projects/user-portal/.env.example projects/user-portal/.env
   cp projects/admin-portal/.env.example projects/admin-portal/.env
   cp projects/api-service/.env.example projects/api-service/.env
   
   # Edit each .env file to add your Supabase credentials
   ```

4. Start the development environment
   ```bash
   docker-compose up
   ```

5. Access the applications:
   - Web Portal: http://localhost:3000
   - User Portal: http://localhost:3001
   - Admin Portal: http://localhost:3002
   - API Service: http://localhost:4000

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

# Start api-service in development mode
cd projects/api-service
npm run dev
```

### Building for Production

```bash
# Build all projects
npm run build

# Or build individual projects
cd projects/web-portal
npm run build
```

## Supabase Integration

This project uses Supabase for backend services, including:
- Authentication
- Database
- Storage
- Edge Functions

See the [Supabase documentation](/supabase/README.md) for more details.