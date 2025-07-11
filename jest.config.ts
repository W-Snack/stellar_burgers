import type {Config} from 'jest';

const config: Config = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleDirectories: [
    "node_modules",
    "src"
  ],

  moduleNameMapper: {
    "@pages": ["<rootDir>/src/pages"],
    "@components": ["<rootDir>/src/components"],
    "@ui": ["<rootDir>/src/components/ui"],
    "@ui-pages": ["<rootDir>/src/components/ui/pages"],
    "@utils-types": ["<rootDir>/src/utils/types"],
    "@api": ["<rootDir>/src/utils/burger-api.ts"],
    "@slices": ["<rootDir>/src/services/slices"],
    "@hooks": ["<rootDir>/src/hooks"],
    "@store": ["<rootDir>/src/services/store.ts"],
    "@selectors": ["<rootDir>/src/services/selectors"]
  },
  preset: 'ts-jest',
  rootDir: './',
  testEnvironment: "jsdom",
};

export default config;
