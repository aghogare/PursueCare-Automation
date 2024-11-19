const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280, // Set your desired width
  viewportHeight: 720, // Set your desired height
  retries: {
    runMode: 2,
    openMode: 2,
  },
  watchForFileChanges: true,
  // e2e: {
  //   experimentalRunAllSpecs: true,
  //  // defaultCommandTimeout: 30000,
  //   pageLoadTimeout: 50000,
  //   testIsolation: false,
  //   setupNodeEvents(on, config) {
  //     on("task", {
  //       log(message) {
  //         console.log(message);
  //         return null;
  //       },
  //     });
  //   return config;
  //   }

  // },
  e2e: {
    experimentalRunAllSpecs: true,
    env: {
      baseUrl: "https://pcareqaproviderportal.azurewebsites.net/authentication/signin",

   
    },
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 30000,
    setupNodeEvents(on, config) {
     //  implement node event listeners here
    //  require("cypress-mochawesome-reporter/plugin")(on);
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
