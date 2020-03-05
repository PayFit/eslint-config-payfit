module.exports = {
  extends: ['prettier'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['prettier/@typescript-eslint'],
    },
  ],
}
