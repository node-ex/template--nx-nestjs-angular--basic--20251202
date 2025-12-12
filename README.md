# template--nx-nestjs-angular--basic--20251202

- [template--nx-nestjs-angular--basic--20251202](#template--nx-nestjs-angular--basic--20251202)
  - [Initialization](#initialization)
  - [Local development](#local-development)
    - [Requirements](#requirements)
    - [Setup](#setup)
    - [Run the whole stack](#run-the-whole-stack)
    - [Build and preview](#build-and-preview)
    - [Formatting](#formatting)

## Initialization

```
npx create-nx-workspace --pm pnpm
pnpm exec nx add @nx/nest
pnpm exec nx generate @nx/nest:application --directory=apps/backend --linter=eslint --name=backend --strict=true --unitTestRunner=jest --useProjectJson=true --no-interactive
pnpm exec nx add @nx/angular
pnpm exec nx generate @nx/angular:application --directory=apps/frontend --name=frontend --e2eTestRunner=none --style=scss --no-interactive
```

## Local development

### Requirements

- Node.js
  - See `.tool-versions` for the recommended version
- `pnpm`
  - Installed globally

### Setup

1. `pnpm install`

### Run the whole stack

Make sure setup is completed and is up-to-date.

You can start each app manually:

```bash
# backend
pnpm exec nx run backend:serve
# Access via: http://localhost:3000

# frontend
pnpm exec nx run frontend:serve
# Access via: http://localhost:4200
```

### Build and preview

```bash
# Build all apps
pnpm exec nx run-many --target=build --all=true

# Build a single app
pnpm exec nx run backend:build

# Preview backend
pnpm exec nx run backend:preview
node ./dist/apps/backend/main.js

# Preview frontend
pnpx serve --single ./dist/apps/frontend/browser
```

### Formatting

We use Prettier to format the code. To run it, use `format*` commands from `package.json` or Nx commands. Put file paths and patterns to ignore into `.prettierignore`.

```bash
# Run format checking for a single project
pnpm exec nx format:check --projects backend

# Run format fixing for a single project
pnpm exec nx format:write --projects backend

# Run format checking for all non-ignored files in the repository
pnpm exec nx format:check --all

# Run format checking for all project files only (inside of `./apps` and `./libs`)
pnpm exec nx format:check --libs-and-apps

# Run format checking for files outside of Nx projects (outside of `./apps` and `./libs`)
pnpm exec prettier --check . '!./apps' '!./libs'

# Run format fixing for files outside of Nx projects (outside of `./apps` and `./libs`)
pnpm exec prettier --write . '!./apps' '!./libs'

# Run format checking only for affected projects (useful for CI)
pnpm exec nx format:check --base=main
pnpm exec nx format:check --base=main --head=HEAD
pnpm exec nx format:check --base=HEAD
```

VSCode "Prettier" extension is recommended to format files on save. See example `.vscode/settings.template.json` for recommended settings.
