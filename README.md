# 🎨 console-badge

> Create simple badges in the browser console

Tiny, easy-to-use package. No Dependencies.

![](media/hero.png)

<p>
  <a href="https://www.npmjs.com/package/console-badge"><img src="https://img.shields.io/npm/v/console-badge.svg" alt="Version"></a>
  <a href="https://npmcharts.com/compare/console-badge?minimal=true"><img src="https://img.shields.io/npm/dm/console-badge.svg" alt="Downloads"></a>
  <a href="https://bundlephobia.com/result?p=console-badge"><img src="https://img.shields.io/bundlephobia/min/console-badge" alt="npm bundle size"></a>
  <a href="https://www.npmjs.com/package/console-badge"><img src="https://img.shields.io/npm/l/console-badge.svg" alt="License"></a>
</p>

<p>
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="JavaScript Standard Code Style"></a>
</p>


## Installation

```bash
$ npm install console-badge
# OR
$ yarn add console-badge
```


## Usage

```js
import consoleBadge from 'console-badge';

consoleBadge({
  mode: 'shields.io',
  leftText: 'console-badge',
  rightText: 'hello world 🚀',
  rightBgColor: '#ffc107',
  rightTextColor: '#1a1a1a'
});

consoleBadge({
  leftText: '😎 Check out our code here:',
  leftTextColor: '#000',
  leftBgColor: '#ddd',
  rightText: 'https://example.com/oss',
  rightBgColor: '#000'
});
```


### Output:

![](media/example-output.png)


## CDN [![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/console-badge/badge?style=rounded)](https://www.jsdelivr.com/package/npm/console-badge)

For prototyping or learning purposes, you can use the latest version with:

```html
<script src="https://cdn.jsdelivr.net/npm/console-badge"></script>
```

For production, we recommend linking to a specific version number and build to avoid unexpected breakage from newer versions:

```html
<script src="https://cdn.jsdelivr.net/npm/console-badge@1/dist/console-badge.min.js"></script>
```

⚠ NPM is the [recommended installation method](#Installation). It pairs nicely with module bundlers such as [webpack](https://webpack.js.org/).


## API

### consoleBadge(options?)

#### options

Type: `Object`

##### mode

Type: `String`<br>
Default: `'default'`<br>
Values:
- `'default'`
- `'shields.io'`

General style of the badge.

##### leftText

Type: `String`<br>
Default: `'Lorem'`

The text inside the **left** section.

##### rightText

Type: `String`<br>
Default: `'Ipsum'`

The text inside the **right** section.

##### leftTextColor

Type: `String`<br>
Default: `'#ffffff'`

The font color of the text inside the **left** section.

##### rightTextColor

Type: `String`<br>
Default: `'#ffffff'`

The font color of the text inside the **right** section.

##### leftBgColor

Type: `String`<br>
Default: `'#555555'`

The background color of the **left** section.

##### rightBgColor

Type: `String`<br>
Default: `'#1966D2'`

The background color of the **right** section.


## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019-present, Dennis Herzberg
