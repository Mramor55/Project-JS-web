const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://careers.cognizant.com/us-en/talent-community/',
    viewportWidth: 1400,
    viewportHeight:1200,
  },
})
