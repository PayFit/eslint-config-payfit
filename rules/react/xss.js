module.exports = {
  plugins: ['xss'],
  rules: {
    'xss/no-location-href-assign': 'warn', // need to specify an escape function
  },
}
