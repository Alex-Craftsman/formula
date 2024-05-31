/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  tabWidth: 2,
  useTabs: false,
  printWidth: 80,
  semi: true,
  endOfLine: 'auto',
  singleQuote: true,
  jsxSingleQuote: false,
  parser: 'typescript',
  printWidth: 100,
  trailingComma: "all",
  quoteProps: "as-needed",
  overrides: [
    {
      files: '*.json',
      options: {
        parser: 'json',
      },
    },
  ],
}

module.exports = config;