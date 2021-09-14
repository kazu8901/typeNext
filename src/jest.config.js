module.exports = {
  testMatch: ['<rootDir>/test/unit/specs/**/*.spec.tsx'],
  preset: 'ts-jest',
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/$1' },
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/pages/**/*.tsx'],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  coverageReporters: ['html', 'text-summary'],
  verbose: true,
  globals: { 'ts-jest': { tsconfig: { jsx: 'react' } } }
}