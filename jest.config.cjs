module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts', '!**/*.d.ts', '!**/index.ts'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
  moduleNameMapper: {
    '^@sorting/(.*)$': '<rootDir>/src/sorting/$1',
    '^@random/(.*)$': '<rootDir>/src/random/$1',
  },
};

