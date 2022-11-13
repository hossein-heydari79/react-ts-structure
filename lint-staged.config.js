// lint-staged.config.js
module.exports = {
    // Type check TypeScript files
    '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
    '**/*.js?(x)': () => 'tsc -p tsconfig.json --noEmit',
}
