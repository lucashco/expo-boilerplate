// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: [
    'expo',
    'prettier',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  plugins: ['prettier', 'simple-import-sort', '@tanstack/query'],
  rules: {
    'prettier/prettier': 'error',
    'simple-import-sort/imports': 'error',
  },
};
