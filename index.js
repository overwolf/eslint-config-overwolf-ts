// https://github.com/google/eslint-config-google
// https://standardjs.com/rules.html
// https://github.com/airbnb/javascript

// standard: https://github.com/standard/eslint-config-standard/blob/master/eslintrc.json
// google: https://github.com/google/eslint-config-google/blob/master/index.js
// airbnb: https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules
// TypeScript: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin

module.exports = {
  'extends': ['overwolf', 'plugin:@typescript-eslint/recommended'],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
    'project': './tsconfig.json',
  },
  'plugins': [
    '@typescript-eslint',
    'react',
  ],
  'rules': {
    '@typescript-eslint/indent': 'off', // disable indentation in favor of ours
    '@typescript-eslint/no-explicit-any': 'off', // supporting client API, some signatures requires 'any'
    'no-invalid-this': 'off', // https://github.com/typescript-eslint/typescript-eslint/issues/491
    'no-undef': 'off', // https://github.com/typescript-eslint/typescript-eslint/issues/342
    'lines-between-class-members': [
      'error', 'always', {
        exceptAfterSingleLine: true,
      },
    ], // overwolf (allow grouped members)
  },
};
