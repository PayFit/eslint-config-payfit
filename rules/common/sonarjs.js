module.exports = {
  plugins: ['sonarjs'],
  extends: ['plugin:sonarjs/recommended'],
  rules: {
    // Bug Detection
    'sonarjs/no-all-duplicated-branches': 'warn',
    'sonarjs/no-element-overwrite': 'warn',
    'sonarjs/no-extra-arguments': 'warn',
    'sonarjs/no-identical-conditions': 'warn',
    'sonarjs/no-identical-expressions': 'warn',
    'sonarjs/no-one-iteration-loop': 'warn',
    'sonarjs/no-use-of-empty-return-value': 'warn',

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
    'sonarjs/prefer-single-boolean-return': 'error',
    'sonarjs/prefer-while': 'warn',
  },
}
