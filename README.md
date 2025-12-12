# template--nx-nestjs-angular--basic--20251202

## Initialization

```
npx create-nx-workspace --pm pnpm
pnpm exec nx add @nx/nest
pnpm exec nx generate @nx/nest:application --directory=apps/backend --linter=eslint --name=backend --strict=true --unitTestRunner=jest --useProjectJson=true --no-interactive
pnpm exec nx add @nx/angular
pnpm exec nx generate @nx/angular:application --directory=apps/frontend --name=frontend --e2eTestRunner=none --style=scss --no-interactive
```
