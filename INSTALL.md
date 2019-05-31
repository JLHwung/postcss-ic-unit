# Installing PostCSS IC Unit

[PostCSS IC Unit] runs in all Node environments, with special instructions for:

| [Node](#node) | [PostCSS CLI](#postcss-cli) | [Webpack](#webpack) | [Create React App](#create-react-app) | [Gulp](#gulp) | [Grunt](#grunt) |
| --- | --- | --- | --- | --- | --- |

## Node

Add [PostCSS IC Unit] to your project:

```bash
npm install postcss-ic-unit --save-dev
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

## PostCSS CLI

Add [PostCSS CLI] to your project:

```bash
npm install postcss-cli --save-dev
```

Use [PostCSS IC Unit] in your `postcss.config.js` configuration file:

```js
const postcssICUnit = require('postcss-ic-unit');

module.exports = {
  plugins: [
    postcssICUnit(/* pluginOptions */)
  ]
}
```

## Webpack

Add [PostCSS Loader] to your project:

```bash
npm install postcss-loader --save-dev
```

Use [PostCSS IC Unit] in your Webpack configuration:

```js
import postcssICUnit from 'postcss-ic-unit';

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader', options: {
            ident: 'postcss',
            plugins: () => [
              postcssICUnit(/* pluginOptions */)
            ]
          } }
        ]
      }
    ]
  }
}
```

## Create React App

Add [React App Rewired] and [React App Rewire PostCSS] to your project:

```bash
npm install react-app-rewired react-app-rewire-postcss --save-dev
```

Use [React App Rewire PostCSS] and [PostCSS IC Unit] in your
`config-overrides.js` file:

```js
import reactAppRewirePostcss from 'react-app-rewire-postcss';
import postcssICUnit from 'postcss-ic-unit';

export default config => reactAppRewirePostcss(config, {
  plugins: () => [
    postcssICUnit(/* pluginOptions */)
  ]
});
```

## Gulp

Add [Gulp PostCSS] to your project:

```bash
npm install gulp-postcss --save-dev
```

Use [PostCSS IC Unit] in your Gulpfile:

```js
import postcss from 'gulp-postcss';
import postcssICUnit from 'postcss-ic-unit';

gulp.task('css', () => gulp.src('./src/*.css').pipe(
  postcss([
    postcssICUnit(/* pluginOptions */)
  ])
).pipe(
  gulp.dest('.')
));
```

## Grunt

Add [Grunt PostCSS] to your project:

```bash
npm install grunt-postcss --save-dev
```

Use [PostCSS IC Unit] in your Gruntfile:

```js
import postcssICUnit from 'postcss-ic-unit';

grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
  postcss: {
    options: {
      use: [
       postcssICUnit(/* pluginOptions */)
      ]
    },
    dist: {
      src: '*.css'
    }
  }
});
```

[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]: https://github.com/postcss/postcss
[PostCSS CLI]: https://github.com/postcss/postcss-cli
[PostCSS Loader]: https://github.com/postcss/postcss-loader
[PostCSS IC Unit]: https://github.com/JLHwung/postcss-ic-unit
[React App Rewire PostCSS]: https://github.com/csstools/react-app-rewire-postcss
[React App Rewired]: https://github.com/timarney/react-app-rewired
