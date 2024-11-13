const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280, // Set your desired width
  viewportHeight: 720, // Set your desired height
  retries: {
    runMode: 2,
    openMode: 2,
  },
  watchForFileChanges: true,
  e2e: {
    experimentalRunAllSpecs: true,
   // defaultCommandTimeout: 30000,
    pageLoadTimeout: 60000,
    testIsolation: false,
    setupNodeEvents(on, config) {
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });
    return config;
    }

  },
});
