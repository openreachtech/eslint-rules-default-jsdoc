# eslint-rules-default-jsdoc

## Language

* [English](./README.md)
* [日本語](./README.ja.md)

## Overview

此のパッケージは、ESLint JSDoc plugin の全ルールを明示されたディフォルトオプションと共に提供します。

他の ESLint 構成リポジトリの基本ルールセットとして使用すると、すべてのルールが機能します。無効にしたいルールは、各ルールを明示的にオフにする必要があります。

此のパッケージは、Flat Config 専用です。

## Usage

### Installing

`.npmrc` に以下を追加してください。

```
// .npmrc
@openreachtech:registry=https://npm.pkg.github.com
```

ESLint v9 以降と一緒に此のパッケージをインストールします。

```sh
npm install --save-dev \
  eslint \
  @openreachtech/eslint-rules-default-jsdoc
```

### Configuring

`eslint.config.js` ファイルに、`@openreachtech/eslint-rules-default-jsdoc` をインポートし、それを使用するためのすべてのルールを含めます。

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
          allowWhitespace: false, // true
          preventAtEnd: true,
          preventAtMiddleLines: true,
        },
      ],
      'jsdoc/tag-lines': [
        'error',
        'never',
        {
          count: 1,
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

各 ESLint Config パッケージでディフォルトの値を上書きする時は、ディフォルトの値をラインコメントで残しておく方法がお薦めです。

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
          allowWhitespace: false, // true <--- ✅
          preventAtEnd: true,
          preventAtMiddleLines: true,
        },
      ],
      'jsdoc/tag-lines': [
        'error',
        'never',
        {
          count: 1,
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

このプロジェクトは MIT ライセンスに基づいてリリースされています。

此方をご覧ください → [LICENSE](./LICENSE)

## Contributing

バグレポート、機能リクエスト、ルールセットの貢献を歓迎します。

GitHub Issues または Pull Request を通じてお気軽にご提案ください。

私たちはユーザーの期待に応えるよう活動しており、貢献を高く評価します。

```sh
% git clone https://github.com/openreachtech/eslint-rules-default-jsdoc.git
% cd eslint-rules-default-jsdoc
% npm install
% npm run lint
% npm test
```

## Authors

* [Open Reach Tech株式会社](https://openreach.tech)
