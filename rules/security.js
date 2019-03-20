module.exports = {
    plugins: ['sonarjs', 'security', 'no-unsanitized', 'xss'],
    extends: ['plugin:sonarjs/recommended', 'plugin:security/recommended'],
    rules: {
    // PayFit Security Config
    // Cross-Site Scripting
    'xss/no-location-href-assign': 'warn', // in the future, raise to error with specific escape function
    'no-unsanitized/method': 'warn',
    'no-unsanitized/property': 'warn',

    // Bug Detection
    'sonarjs/no-all-duplicated-branches': 'error',
    'sonarjs/no-element-overwrite': 'error',
    'sonarjs/no-extra-arguments': 'error',
    'sonarjs/no-identical-conditions': 'error',
    'sonarjs/no-identical-expressions': 'error',
    'sonarjs/no-one-iteration-loop': 'error',
    'sonarjs/no-use-of-empty-return-value': 'error',

    'security/detect-unsafe-regex': 'error',
    'security/detect-buffer-noassert': 'error',
    'security/detect-child-process': 'error',
    'security/detect-disable-mustache-escape': 'error',
    'security/detect-eval-with-expression': 'error',
    'security/detect-no-csrf-before-method-override': 'error',
    'security/detect-non-literal-fs-filename': 'warn',
    'security/detect-non-literal-regexp': 'warn',
    'security/detect-non-literal-require': 'warn',
    'security/detect-object-injection': 'warn',
    'security/detect-possible-timing-attacks': 'warn',
    'security/detect-pseudoRandomBytes': 'error',
    'security/detect-new-buffer': 'error',

    // Code Smell Detection
    'sonarjs/cognitive-complexity': ['warn', 90],
    'sonarjs/max-switch-cases': 'error',
    'sonarjs/no-duplicate-string': ['warn', 9],
    'sonarjs/no-duplicated-branches': 'error',
    'sonarjs/no-identical-functions': 'off',
    'sonarjs/no-inverted-boolean-check': 'error',
    'sonarjs/no-redundant-boolean': 'error',
    'sonarjs/no-small-switch': 'error',
    'sonarjs/no-useless-catch': 'error',
    'sonarjs/prefer-immediate-return': 'off',
    'sonarjs/prefer-object-literal': 'error',
    'sonarjs/prefer-single-boolean-return': 'error',
    'sonarjs/prefer-while': 'error',
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