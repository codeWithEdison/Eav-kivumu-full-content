#!/bin/bash

# Stage and commit changes for .gitignore
git add .gitignore
git commit -m "Update .gitignore"

# Stage and commit changes for README.md
git add README.md
git commit -m "Update README.md"

# Stage and commit changes for package-lock.json
git add package-lock.json
git commit -m "Update package-lock.json"

# Stage and commit changes for package.json
git add package.json
git commit -m "Update package.json"

# Stage and commit changes for public/ directory
git add public/
git commit -m "Update public/ directory"

# Stage and commit changes for src/App.css
git add src/App.css
git commit -m "Update App.css"

# Stage and commit changes for src/App.test.tsx
git add src/App.test.tsx
git commit -m "Update App.test.tsx"

# Stage and commit changes for src/index.css
git add src/index.css
git commit -m "Update index.css"

# Stage and commit changes for src/index.tsx
git add src/index.tsx
git commit -m "Update index.tsx"

# Stage and commit changes for src/logo.svg
git add src/logo.svg
git commit -m "Update logo.svg"

# Stage and commit changes for src/react-app-env.d.ts
git add src/react-app-env.d.ts
git commit -m "Update react-app-env.d.ts"

# Stage and commit changes for src/reportWebVitals.ts
git add src/reportWebVitals.ts
git commit -m "Update reportWebVitals.ts"

# Stage and commit changes for src/setupTests.ts
git add src/setupTests.ts
git commit -m "Update setupTests.ts"

# Stage and commit changes for src/utils/ directory
git add src/utils/
git commit -m "Update utils/ directory"

# Stage and commit changes for tailwind.config.js
git add tailwind.config.js
git commit -m "Update tailwind.config.js"

# Stage and commit changes for tsconfig.json
git add tsconfig.json
git commit -m "Update tsconfig.json"

echo "All changes have been committed separately."
