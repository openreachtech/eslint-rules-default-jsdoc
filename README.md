# eslint-rules-default-jsdoc

## Language

* [English](./README.md)
* [日本語](./README.ja.md)

## Overview

This package provides ESLint JSDoc plugin rules with default options.

If this package is used as a base ruleset in another ESLint config repository, all rules
are enabled by default. You must explicitly turn off each rule that you want to disable.

Rules deprecated in the plugin are not included in the exported ruleset, so it holds
fewer rules than the plugin itself. Their default options are documented in
`rules/deprecated.js` and exported as `deprecated`. The two rulesets together cover
every rule of the plugin.

This package is only for Flat Config.

## Usage

### Installing

Install this package alongside ESLint v9 or greater:

```sh
npm install --save-dev \
  eslint \
  @openreachtech/eslint-rules-default-jsdoc
```

### Configuring

In your `eslint.config.js` file, import `@openreachtech/eslint-rules-default-jsdoc` and include the all rules to use it:

```js
// eslint.config.js
import jsdocPlugin from '@openreachtech/eslint-rules-default-jsdoc'

export default [
  {
    ...jsdocPlugin,

    rules: {
      ...jsdocPlugin.rules,

      'jsdoc/no-multi-asterisks': [
        'error',
        {
          allowWhitespace: true, // false
          preventAtEnd: true,
          preventAtMiddleLines: true,
        },
      ],
      'jsdoc/tag-lines': [
        'error',
        'never',
        {
          count: 1,
          maxBlockLines: null,
          startLines: 1, // 0
          endLines: 0,
          applyToEndTag: true,
          tags: {},
        },
      ],
    },
  },
]
```

## Track of Changes with Line Comments

When overwriting default values ​​in each ESLint Config package, we recommend leaving the default values ​​as line comments.

```js
// eslint.config.js
import jsdocPlugin from '@openreachtech/eslint-rules-default-jsdoc'

export default [
  {
    ...jsdocPlugin,

    rules: {
      ...jsdocPlugin.rules,

      'jsdoc/no-multi-asterisks': [
        'error',
        {
          allowWhitespace: true, // false <--- ✅
          preventAtEnd: true,
          preventAtMiddleLines: true,
        },
      ],
      'jsdoc/tag-lines': [
        'error',
        'never',
        {
          count: 1,
          maxBlockLines: null,
          startLines: 1, // 0 <--- ✅
          endLines: 0,
          applyToEndTag: true,
          tags: {},
        },
      ],
    },
  },
]
```

## License

This project is released under the Apache License 2.0.

See → [LICENSE](./LICENSE)

## Contributing

We welcome bug reports, feature requests, and ruleset contributions.

Please feel free to contact us through GitHub Issues or Pull Requests.

We strive to meet user expectations and your contributions are highly appreciated!

```sh
% git clone https://github.com/openreachtech/eslint-rules-default-jsdoc.git
% cd eslint-rules-default-jsdoc
% npm install
% npm run lint
% npm test
```

## Authors

* [Open Reach Tech Inc.](https://openreach.tech)
