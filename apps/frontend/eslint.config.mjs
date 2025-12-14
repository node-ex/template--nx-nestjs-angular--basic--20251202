import { defineConfig } from 'eslint/config';
import nx from '@nx/eslint-plugin';
import baseConfig from '../../eslint.config.mjs';

/*
 * ESLint defineConfig() documentation:
 * https://eslint.org/docs/latest/use/configure/configuration-files#using-defineconfig-to-help-create-configurations
 */
export default defineConfig([
  ...baseConfig,
  /*
   * https://github.com/nrwl/nx/blob/master/packages/eslint-plugin/src/flat-configs/angular.ts
   */
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    // Override or add rules here
    rules: {},
  },
]);
