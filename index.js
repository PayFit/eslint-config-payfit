module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    $env: false,
    window: true,
    __DEV__: false,
    __PROD__: false,
    __DEBUG__: false,
    __COVERAGE__: false,
    __BASENAME__: false,
  },
}
