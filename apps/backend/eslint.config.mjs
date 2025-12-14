import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import baseConfig from '../../eslint.config.mjs';

/*
 * ESLint defineConfig() documentation:
 * https://eslint.org/docs/latest/use/configure/configuration-files#using-defineconfig-to-help-create-configurations
 */
export default defineConfig([
  ...baseConfig,

  /*
   * Documentation of shared configs:
   * https://typescript-eslint.io/users/configs
   *
   * Example of shared config's source code:
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/flat/strict.ts
   */
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  /* All */
  {
    rules: {
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-extraneous-class': [
        'error',
        {
          allowWithDecorator: true,
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
  /* TypeScript */
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.cts', '**/*.mts'],
    rules: {
      /* Example of overriding a rule */
      // '@typescript-eslint/no-extraneous-class': 'off',
    },
  },
  /* JavaScript */
  {
    files: ['**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
]);
