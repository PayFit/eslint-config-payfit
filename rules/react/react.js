module.exports = {
  env: {
    browser: true,
  },
  plugins: ['airbnb'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
  },
}
