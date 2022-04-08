module.exports = {
  plugins: ['payfit'],
  extends: ['plugin:payfit'],
  rules: {
    'payfit/no-mongo-objectid': 'error',
  },
}
