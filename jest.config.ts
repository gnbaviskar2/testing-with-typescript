import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest', // to understand the typescript code
  testEnvironment: 'node',
  verbose: true, // will show more info in the console
  collectCoverage: true, // collect coverage report for jest running tests
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'], // collect coverage from src typescript files
};

export default config;
