module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  extends: 'standard',
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // requires semicolons at the end of statements
    'semi': ['error', 'always']
  }
};
