// https://dev.to/ivadyhabimana/setup-jest-and-react-testing-library-in-a-react-project-a-step-by-step-guide-1mf0
module.exports = {
  collectCoverage: true, // enables collecting coverage
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.stories.{js,jsx}', // ignore storybook stories file
  ],
  coverageDirectory: 'coverage', // specifies folder jest will put coverage files
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
