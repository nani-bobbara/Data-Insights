
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
│   │   ├── public/             # Static assets
│   │   ├── src/                # Source code
│   │   │   ├── api/            # API integration
│   │   │   ├── assets/         # Project assets
│   │   │   ├── components/     # React components
│   │   │   ├── features/       # Feature modules
│   │   │   ├── hooks/          # Custom React hooks
│   │   │   ├── layouts/        # Layout components
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
│   └── admin-portal/           # Admin management application
│       ├── public/             # Static assets
│       ├── src/                # Source code
│       │   ├── api/            # API integration
│       │   ├── assets/         # Project assets
│       │   ├── components/     # React components
│       │   ├── features/       # Feature modules
│       │   ├── hooks/          # Custom React hooks
│       │   ├── layouts/        # Layout components
│       │   ├── pages/          # Page components
│       │   ├── store/          # State management
│       │   ├── types/          # TypeScript type definitions
│       │   ├── utils/          # Utility functions
│       │   ├── App.tsx         # Main App component
│       │   ├── index.tsx       # Entry point
│       │   └── vite-env.d.ts   # Vite types
│       ├── Dockerfile          # Docker configuration
│       ├── index.html          # HTML entry
│       ├── package.json        # Dependencies and scripts
│       ├── tsconfig.json       # TypeScript configuration
│       └── vite.config.ts      # Vite configuration
├── docker-compose.yml          # Docker Compose configuration for local development
├── package.json                # Root package.json for workspace configuration
├── README.md                   # Repository documentation
└── tsconfig.json               # Base TypeScript configuration
```

## Project Descriptions

### Web Portal
The Web Portal is the public-facing marketing website. It showcases the platform's features, pricing, and allows users to sign up or request access to the DataInsight platform.

**Key Features:**
- Landing page with feature highlights
- Interactive product demos
- Early access registration
- Customer testimonials and case studies
- Blog and knowledge base

### User Portal
The User Portal is the main application that customers use to analyze their data, create visualizations, and manage their account.

**Key Features:**
- Interactive dashboards
- Data upload and management
- AI-powered analytics
- Visualization creation
- Report generation
- Account management

### Admin Portal
The Admin Portal is used by internal teams to manage the platform, users, and system configurations.

**Key Features:**
- User management
- System configuration
- Feature flag management
- Analytics monitoring
- Access request handling
- Audit logging

## Microservices Architecture

Each project is designed as an independent microservice with:

- **Independent Deployment**: Each application can be built, tested, and deployed separately.
- **Loose Coupling**: Applications communicate through well-defined APIs.
- **Scalability**: Each service can be scaled independently based on demand.
- **Technology Consistency**: All three applications use React, TypeScript, and Vite for a consistent development experience.
- **Containerization**: Docker is used for consistent environments across development, testing, and production.

## Docker Setup

Each project contains its own Dockerfile for containerization. The docker-compose.yml file at the root enables running all services locally for development.

To run a specific service:
```bash
docker build -t datainsight/web-portal ./projects/web-portal
docker run -p 3000:80 datainsight/web-portal
```

To run all services with Docker Compose:
```bash
docker-compose up
```

## Development Workflow

1. Clone the repository
2. Install dependencies at the root level: `npm install`
3. Start a specific project: `npm run start:web` or `npm run start:user` or `npm run start:admin`

## Shared Code

Common utilities and UI components are shared across projects through the packages directory. This ensures consistency and reduces duplication while maintaining the independence of each application.
