'use strict';

const assert = require('assert');
const eslint = require('eslint');
const config = require('../');

const filesToTest = [
  'index.js',
  'test/test.js',
];

const options = {
  useEslintrc: false,
  envs: ['node', 'es6'],
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: config.rules,
};

const report = new eslint.CLIEngine(options).executeOnFiles(filesToTest);
assert.equal(report.errorCount, 0);
assert.equal(report.warningCount, 0);
