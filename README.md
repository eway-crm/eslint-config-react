![eWay-CRM Logo](https://www.eway-crm.com/wp-content/themes/eway/img/email/logo_grey.png)
# eWay-CRM ESLint Rules for React and TypeScript

Requires ESLint 9 and the flat config format. For ESLint 8 / `.eslintrc.json`, use version `1.x`.

Builds on [`@eway-crm/eslint-config`](https://www.npmjs.com/package/@eway-crm/eslint-config) and adds React and React Hooks rules.

## Installation

```
npm i --save-dev eslint@9 @eway-crm/eslint-config-react
```

## Configuration

Create `eslint.config.js` in your project root:

```js
const ewayReactConfig = require('@eway-crm/eslint-config-react');

module.exports = [
    ...ewayReactConfig,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: __dirname,
            },
        },
    },
    {
        ignores: ['dist/**', 'build/**', 'coverage/**'],
    },
];
```

If your project is ESM (`"type": "module"` in `package.json`), name the file `eslint.config.mjs` and use imports instead:

```js
import { fileURLToPath } from 'node:url';
import ewayReactConfig from '@eway-crm/eslint-config-react';

export default [
    ...ewayReactConfig,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: fileURLToPath(new URL('.', import.meta.url)),
            },
        },
    },
    {
        ignores: ['dist/**', 'build/**', 'coverage/**'],
    },
];
```

`parserOptions.projectService` is required — the config enables type-aware rules, which need TypeScript program information. Every `.ts`/`.tsx` file you lint must be covered by a `tsconfig.json`, otherwise ESLint reports a parsing error for it.

Rules apply to `.ts`, `.tsx`, `.mts` and `.cts` only. Plain `.js`/`.jsx` files are left untouched by this config.

Flat config has no `.eslintignore`. Everything you want skipped must be listed in an `ignores` entry.

## Opting out of formatting rules

The base config ships a `@eway-crm/eslint-config/formatting` block (spacing, semicolons, line breaks). If you format with Prettier, drop it:

```js
module.exports = [
    ...ewayReactConfig.filter((config) => config.name !== '@eway-crm/eslint-config/formatting'),
];
```

## Usage

```
npx eslint src
npx eslint src --fix
```
