const { defineConfig } = require("cypress");

module.exports = defineConfig({
   reporter: "cypress-mochawesome-reporter",
   retries: {
    runMode: 2,
    openMode: 2,
  },

  e2e: {
    experimentalRunAllSpecs: true,
    env: {
      baseUrl: "https://pcareqaproviderportal.azurewebsites.net/authentication/signin",
     
    },
    pageLoadTimeout: 80000,
    setupNodeEvents(on, config) {
     //  implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });
    return config;
    },
    testIsolation: false,
    watchForFileChanges: true,
  },
});
