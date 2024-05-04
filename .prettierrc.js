/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './pkgs/verus-ui/tailwind.config.ts',
  tailwindFunctions: ['clsx', 'twMerge'],
  bracketSameLine: false,
  jsxSingleQuote: true,
  printWidth: 100,
  semi: false,
  singleAttributePerLine: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  arrowParens: 'avoid'
}
