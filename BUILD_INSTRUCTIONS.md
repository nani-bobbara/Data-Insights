
# Build Instructions for DataInsight Platform

## Important: Add build:dev script to package.json

To properly build the project in Lovable, you need to add the following script to your package.json file:

```json
"build:dev": "vite build --mode development"
```

Add this to the "scripts" section of your package.json file. The final scripts section should look something like:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build", 
  "build:dev": "vite build --mode development",
  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview"
}
```

## Setting Up the Project

After making this change, run the following commands to ensure all dependencies are installed:

```bash
npm install
```

## Running in Development Mode

To run the project in development mode:

```bash
npm run dev
```

## Building for Production

To build the project for production:

```bash
npm run build
```

## Building for Development

To build the project for development:

```bash
npm run build:dev
```
