module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y"
  ],
  "ecmaFeatures": {
    "jsx": true,
    "spread": true,
  },
  "rules": {
    "no-use-before-define": [2, "nofunc"],
    "max-len": [2, 90, 4],
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
    "quotes": [2, "single", {"avoidEscape": true, "allowTemplateLiterals": true}],
    "no-underscore-dangle": ["error", { "allow": ["_extend", "_id", "__super__"] }],
    "space-before-function-paren": ["error", "never"],

    # custom
    "global-require": 0,
    "import/no-unresolved": 0, # avoid errors when using webpacks' aliases
    "no-confusing-arrow": ["error", {"allowParens": true}],
    "no-console": 1,
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
    "import/newline-after-import": 0,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,

    # React / JSX
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-first-prop-new-line": 0,
    "react/forbid-prop-types": 0,
    "react/no-unused-prop-types": 0, # useful but buggy atm
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
