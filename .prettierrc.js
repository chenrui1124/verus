/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './lib/tailwind.config.ts',
  tailwindAttributes: [
    'class',
    'enterFromClass',
    'enterActiveClass',
    'enterToClass',
    'leaveFromClass',
    'leaveActiveClass',
    'leaveToClass',
    'enter-from-class',
    'enter-active-class',
    'enter-to-class',
    'leave-from-class',
    'leave-active-class',
    'leave-to-class'
  ],
  bracketSameLine: false,
  jsxBracketSameLine: true,
  jsxSingleQuote: true,
  printWidth: 100,
  semi: false,
  singleAttributePerLine: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  arrowParens: 'avoid'
}
