module.exports = {
  plugins: ['sonarjs', 'security', 'no-unsanitized', 'xss'],
  extends: ['plugin:sonarjs/recommended', 'plugin:security/recommended'],
  rules: {
    // Cross-Site Scripting
    'xss/no-location-href-assign': 'warn', // need to specify an escape function
    'no-unsanitized/method': 'warn',
    'no-unsanitized/property': 'warn',

    // Bug Detection
    'sonarjs/no-all-duplicated-branches': 'warn',
    'sonarjs/no-element-overwrite': 'warn',
    'sonarjs/no-extra-arguments': 'warn',
    'sonarjs/no-identical-conditions': 'warn',
    'sonarjs/no-identical-expressions': 'warn',
    'sonarjs/no-one-iteration-loop': 'warn',
    'sonarjs/no-use-of-empty-return-value': 'warn',
    'security/detect-unsafe-regex': 'off',
    'security/detect-buffer-noassert': 'warn',
    'security/detect-child-process': 'warn',
    'security/detect-disable-mustache-escape': 'warn',
    'security/detect-eval-with-expression': 'error',
    'security/detect-no-csrf-before-method-override': 'warn',
    'security/detect-non-literal-fs-filename': 'off',
    'security/detect-non-literal-regexp': 'warn',
    'security/detect-non-literal-require': 'warn',
    'security/detect-object-injection': 'off',
    'security/detect-possible-timing-attacks': 'off',
    'security/detect-pseudoRandomBytes': 'warn',
    'security/detect-new-buffer': 'warn',

    // Code Smell Detection
    'sonarjs/cognitive-complexity': ['warn', 90],
    'sonarjs/max-switch-cases': 'warn',
    'sonarjs/no-duplicate-string': 'off',
    'sonarjs/no-duplicated-branches': 'warn',
    'sonarjs/no-identical-functions': 'off',
    'sonarjs/no-inverted-boolean-check': 'warn',
    'sonarjs/no-redundant-boolean': 'warn',
    'sonarjs/no-small-switch': 'warn',
    'sonarjs/no-useless-catch': 'warn',
    'sonarjs/prefer-immediate-return': 'off',
    'sonarjs/prefer-object-literal': 'warn',
    'sonarjs/prefer-single-boolean-return': 'warn',
    'sonarjs/prefer-while': 'warn',
  },
}
