module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'operator-linebreak': ['error', 'after'],
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    'no-restricted-globals': ['error', 'event', 'fdescribe'],
    'no-alert': 'off',
    'no-console': 'off',
    'react/state-in-constructor': 0,
    'implicit-arrow-linebreak': 0,
    'react/static-property-placement': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'no-nested-ternary': 0,
  },
  // endOfLine: "crlf",
};
