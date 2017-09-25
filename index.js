module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
    "comma-dangle": 0,
    "semi": [2, "never"],
    "no-underscore-dangle": ["error", { "allow": ["_extend", "_id", "__super__", "_source"] }],
    "jsx-quotes": ["error", "prefer-single"],
    "jsx-a11y/no-static-element-interactions": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/forbid-prop-types": 0
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
