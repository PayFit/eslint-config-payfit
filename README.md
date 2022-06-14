
<================================================>

<================= [DEPRECATED] =================>

<================================================>


Note: This configuration has been deprecated in favor of https://github.com/PayFit/core-packages/tree/master/packages/eslint-config


[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# eslint-config-payfit

## How to install

```sh
npx install-peerdeps --dev eslint-config-payfit
```

## How to use

### Required configuration

This configuration adds the common javascript rules.
Edit your .eslintrc file:

```
{
    "extends": ["payfit"]
}
```

### Browser configuration

This configuration adds the common javascript rules and the browser rules (react for example).
Edit your .eslintrc file:

```
{
    "extends": ["payfit", "payfit/react"]
}
```

### Nodejs configuration

This configuration adds the common javascript rules and the nodejs rules.
Edit your .eslintrc file:

```
{
    "extends": ["payfit", "payfit/node"]
}
```

### Testing configuration

This configuration adds the common javascript rules and the jest rules.
Edit your .eslintrc file:

```
{
    "extends": ["payfit", "payfit/jest"]
}
```
