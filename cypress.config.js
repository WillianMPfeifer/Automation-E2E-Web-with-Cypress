const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    baseUrl: "https://grp.digifred.com/#/accounts",

    env: {
      user: "35324094021",
      password: "senha123",
      invalidUser: "12345678901",
      invalidPassword: "123456789",
      
      schoolOne: "Escola 1",
      schoolTwo: "Escola 2",

      setTimeout: 20000,
    },

    async setupNodeEvents(on, config) {
      
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});