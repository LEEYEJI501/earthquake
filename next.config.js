const WindiCSSWebpackPlugin = require("windicss-webpack-plugin");

module.exports = async (phase, { defaultConfig }) => {
  const config = require('dotenv').config('.env')

  const parsed = config.parsed

  const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
      config.plugins.push(new WindiCSSWebpackPlugin());
      return config;
    },
    env: {
      appConfig: parsed,
      customKey: 'my-value',
    }
  }
  return nextConfig
}
