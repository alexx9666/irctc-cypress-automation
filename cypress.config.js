const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7afdkj',

  defaultCommandTimeout: 120000,
  // video: true,

  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium') {
          launchOptions.args.push('--disable-gpu');
          launchOptions.args.push('--no-sandbox');
          launchOptions.args.push('--disable-dev-shm-usage');
        }
        return launchOptions;
      });
      on('task', {
        log(message) {
          console.log(message + '\n\n');
          return null;
        },
      });
    },
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true
  },
});


