module.exports = {
  env: {
    jest: true,
  },
  plugins: ['jest'],
  extends: ['plugin:jest/recommended', 'plugin:jest/style'],
  rules: {
    'jest/prefer-to-be-null': 'error',
  },
}
