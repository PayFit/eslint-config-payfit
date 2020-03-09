module.exports = {
  env: {
    es6: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'error',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            mjs: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
      },
    },
  ],
}
