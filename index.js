module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
    "no-use-before-define": [2, "nofunc"],
    "new-cap": 0,
    "no-param-reassign": 0,
    "consistent-return": 0,
    "guard-for-in": 0,
    "comma-dangle": 0,
    "arrow-parens": 0,
    "func-names": 0,
    "eqeqeq": 0,
    "no-plusplus": 0,
    "strict": 0,
    "semi": [2, "never"],
    "no-underscore-dangle": ["error", { "allow": ["_extend", "_id", "__super__", "_source"] }],
    "global-require": 0,
    "import/no-unresolved": 0,
    "no-console": 1,
    "import/newline-after-import": 0,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-first-prop-new-line": 0,
    "react/forbid-prop-types": 0,
    "react/no-unused-prop-types": 0,
    "jsx-quotes": ["error", "prefer-single"],
    "jsx-a11y/no-static-element-interactions": 0
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
