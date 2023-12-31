module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main.ts',
    '!<rootDir>/src/config/config-intern.module.ts',
    '!<rootDir>/src/config/node.d.ts',
    '!<rootDir>/src/app.module.ts',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  testRegex: '.*\\.spec\\.ts$',
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/$1',
  },
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 100,
      statements: 90,
    },
  },
};
