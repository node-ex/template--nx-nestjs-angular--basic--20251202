import type { Config } from 'jest';
import { getJestProjectsAsync } from '@nx/jest';

export default async (): Promise<Config> => ({
  // https://github.com/nrwl/nx/blob/master/packages/jest/src/utils/config/get-jest-projects.ts
  projects: await getJestProjectsAsync(),
});
