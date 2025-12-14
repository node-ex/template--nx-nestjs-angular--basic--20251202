import nx from '@nx/eslint-plugin';

export default [
  // https://github.com/nrwl/nx/blob/master/packages/eslint-plugin/src/flat-configs/base.ts
  ...nx.configs['flat/base'],
  // https://github.com/nrwl/nx/blob/master/packages/eslint-plugin/src/flat-configs/javascript.ts
  ...nx.configs['flat/typescript'],
  // https://github.com/nrwl/nx/blob/master/packages/eslint-plugin/src/flat-configs/typescript.ts
  ...nx.configs['flat/javascript'],
  {
    ignores: [
      /* Root folders */
      '.angular',
      '.git',
      '.idea',
      '.nx',
      'coverage',
      'node_modules',
      'patches',
      /* Root files */
      'pnpm-lock.yaml',
      /* Nested folders */
      '**/dist',
      '**/out-tsc',
      /* Nested files */
      '**/*.tsbuildinfo',
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
];
