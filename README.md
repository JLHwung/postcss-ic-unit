# PostCSS IC Unit [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![CSS Standard Status][css-img]][css-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[PostCSS IC Unit] lets you use the `ic` length unit, following the [CSS Values and Units Module] specification.

```pcss
p {
  text-indent: 2ic;
}

.bubble {
  width: calc(8ic + 20px);
}

/* becomes */

p {
  text-indent: 2em;
  text-indent: 2ic;
}

.bubble {
  width: calc(8em + 20px);
  width: calc(8ic + 20px);
}
```

## Usage

Add [PostCSS IC Unit] to your project:

```bash
npm install postcss postcss-ic-unit --save-dev
```

Use [PostCSS IC Unit] to process your CSS:

```js
import postcssICUnit from 'postcss-ic-unit';

postcssICUnit.process(YOUR_CSS /*, processOptions, pluginOptions */);
```

Or use it as a [PostCSS] plugin:

```js
import postcss from 'postcss';
import postcssICUnit from 'postcss-ic-unit';

postcss([
  postcssICUnit(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

[PostCSS IC Unit] runs in all Node environments, with special instructions for:

| [Node](INSTALL.md#node) | [Webpack](INSTALL.md#webpack) | [Create React App](INSTALL.md#create-react-app) | [Gulp](INSTALL.md#gulp) | [Grunt](INSTALL.md#grunt) |
| --- | --- | --- | --- | --- |

## Options

### preserve

The `preserve` option determines whether the original `ic` declaration should
remain in the CSS. By default, the original declaration is preserved.

[css-img]: https://cssdb.org/images/badges/ic-unit.svg
[css-url]: https://cssdb.org/#ic-unit
[cli-img]: https://img.shields.io/travis/JLHwung/postcss-ic-unit.svg
[cli-url]: https://travis-ci.org/JLHwung/postcss-ic-unit
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[npm-img]: https://img.shields.io/npm/v/postcss-ic-unit.svg
[npm-url]: https://www.npmjs.com/package/postcss-ic-unit

[CSS Values and Units Module]: https://www.w3.org/TR/css-values-4/#ic
[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]: https://github.com/postcss/postcss
[PostCSS Loader]: https://github.com/postcss/postcss-loader
[PostCSS IC Unit]: https://github.com/JLHwung/postcss-ic-unit
