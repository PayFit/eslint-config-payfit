module.exports = {
  extends: 'airbnb',
  rules: {
    // base
    'comma-dangle': 'off',
    semi: ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'no-use-before-define': 'off',
    'no-underscore-dangle': [
      'error',
      { allow: ['_extend', '_id', '__super__', '_source'] },
    ],
    'jsx-quotes': ['error', 'prefer-single'],

    // jsx-a11y
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/no-autofocus': 'off',
    
    // react
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': 'off',
    'react/require-default-props': 'off',
    'react/no-array-index-key': 'warn',
    'react/destructuring-assignment': 'off',
  },
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
