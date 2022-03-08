const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i':
      '<rootDir>/test/__mocks__/fileMock.js',
    '@pages/(.*)': '<rootDir>/pages/$1',
    '@public/(.*)': '<rootDir>/public/$1',
    '@theme/(.*)': '<rootDir>/theme/$1',
    '@test/(.*)': '<rootDir>/test/$1',
  },
};

module.exports = createJestConfig(customJestConfig);
