
// Custom build script for development mode
const { execSync } = require('child_process');

console.log('Building project in development mode...');
try {
  execSync('npx vite build --mode development', { stdio: 'inherit' });
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
