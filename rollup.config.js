import pkg from './package.json';

import { terser } from 'rollup-plugin-terser';

const fileBanner = [
  '/*!',
  ' * ' + pkg.name + ' v' + pkg.version,
  ' * (c) 2019-present ' + pkg.author,
  ' * Released under the ' + pkg.license + ' License.',
  ' */'
].join('\n');

export default [
  // browser-friendly UMD build
  {
    input: 'src/main.js',
    output: {
      name: 'consoleBadge',
      file: pkg.browser,
      format: 'umd',
      banner: fileBanner
    }
  },

  // cdn-friendly and browser-friendly minified UMD build
  {
    input: 'src/main.js',
    output: {
      name: 'consoleBadge',
      file: pkg.jsdelivr,
      format: 'umd',
      banner: fileBanner
    },
    plugins: [
      terser({
        output: {
          comments: /^!/
        }
      })
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: 'src/main.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        banner: fileBanner
      },
      {
        file: pkg.module,
        format: 'es',
        banner: fileBanner
      }
    ]
  }
];
