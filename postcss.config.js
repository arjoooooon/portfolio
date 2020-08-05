// in postcss.config.js
const postcssPresetEnv = require(`postcss-preset-env`)

module.exports = () => ({
  parser: "sugarss",
  plugins: [
    postcssPresetEnv({
      stage: 0,
    }),
  ],
})
