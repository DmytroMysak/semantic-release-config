module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    '@netly/eslint-config-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
  },
};
