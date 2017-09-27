module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
    "arrow-parens": "as-needed",
    "comma-dangle": "off",
    "semi": ["error", "never"],
    "no-underscore-dangle": ["error", { "allow": ["_extend", "_id", "__super__", "_source"] }],
    "jsx-quotes": ["error", "prefer-single"],
    "jsx-a11y/no-static-element-interactions": "off",
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    "react/forbid-prop-types": "off"
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "globals": {
    "$env": false,
    "window": true,
    "__DEV__" : false,
    "__PROD__" : false,
    "__DEBUG__" : false,
    "__COVERAGE__" : false,
    "__BASENAME__" : false
  }
};
