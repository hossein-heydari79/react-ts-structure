// lint-staged.config.js
module.exports = {
  // Type check TypeScript files
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.{ts,tsx,js}': (filenames) => [
    // `eslint ${filenames.join(' ')}`,
    `prettier --write ${filenames.join(' ')} --config ./.prettierrc`,
  ],

  // Format MarkDown and JSON
  '**/*.{md,json,scss}': (filenames) =>
    `prettier --write ${filenames.join(' ')} --config ./.prettierrc`,
}
