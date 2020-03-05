module.exports = {
  env: {
    node: true,
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
