import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    fixturesFolder: "./tests/e2e/cypress/fixtures",
    supportFile: "./tests/e2e/cypress/support/index.js",
    specPattern: "./tests/e2e/cypress/integration/**/*.cy.{js,jsx,ts,tsx}",
  },
});
