module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: ['plugin:node/recommended'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      settings: {
        node: {
          tryExtensions: ['.js', '.json', '.ts'],
        },
      },
      rules: {
        'node/no-unsupported-features/es-syntax': 'off',
      },
    },
  ],
}
