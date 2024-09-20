module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  root: true,
  overrides: [
    {
      files: '*.ts',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@angular-eslint/recommended',
        'prettier',
      ],
      parser: '@typescript-eslint/parser',
      plugins: [
        'eslint-plugin-import',
        '@angular-eslint/eslint-plugin',
        '@angular-eslint/eslint-plugin-template',
        '@typescript-eslint',
      ],
      rules: {
        "@typescript-eslint/no-explicit-any": "warn",
      },
    },
    {
      files: ['*.html'],
      plugins: ['prettier'],
      parser: '@angular-eslint/template-parser',
      rules: {
        "prettier/prettier": "error",
      },
    },
  ],
};
