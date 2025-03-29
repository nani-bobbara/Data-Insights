
# Alternative Build Instructions

Since you're unable to modify the package.json directly to add the `build:dev` script, you can use one of these alternative methods:

## Method 1: Use the Custom Build Script

Run the custom build script that's been created:

```bash
node scripts/build-dev.js
```

This script will execute `npx vite build --mode development` for you.

## Method 2: Run Vite Build Command Directly

You can also run the Vite build command directly using npx:

```bash
npx vite build --mode development
```

Both methods will accomplish the same thing as having a `build:dev` script in your package.json.

## Method 3: Set Environment Variable with Existing Build Script

If you prefer using the existing build script, you can set the NODE_ENV:

```bash
NODE_ENV=development npm run build
```

Choose the method that works best for your workflow.
