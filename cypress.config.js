const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  defaultCommandTimeout: 10000,
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome-report",
    overwrite: false,
    html: true,
    json: true,
    timestamp: "dd-mm-yyyy_HHMMss",
    charts: true,
    reportPageTitle: "Relatório de Testes de Login",
  },
  e2e: {
    baseUrl: "https://front.serverest.dev",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    specPattern: 'cypress/e2e/features/**/*.feature',
    supportFile: 'cypress/support/e2e.js',
  },
  video: true,
});
