# 🎨 console-badge

> Create simple badges in the browser console

Tiny and easy-to-use package. No Dependencies.

<p>
  <a href="https://www.npmjs.com/package/console-badge"><img src="https://img.shields.io/npm/v/console-badge.svg" alt="Version"></a>
  <a href="https://npmcharts.com/compare/console-badge?minimal=true"><img src="https://img.shields.io/npm/dm/console-badge.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/console-badge"><img src="https://img.shields.io/npm/l/console-badge.svg" alt="License"></a>
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
  leftText: '🚀 Check out our code here:',
  leftTextColor: '#000',
  leftBgColor: '#ddd',
  rightText: 'https://example.com/oss',
  rightBgColor: '#000'
});

consoleBadge({
  mode: 'shields.io',
  leftText: 'API Status',
  rightText: 'Offline',
  rightBgColor: '#e05d44'
});
```


## API

### consoleBadge(options?)

#### options

Type: `object`

##### mode

Type: `String`<br>
Default: `'default'`

Available modes:
- `default`
- `shields.io`

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
