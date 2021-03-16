/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/*/dist/'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/projects/playground/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
    },
  },
};
