/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',

    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',

    'plugin:vuejs-accessibility/recommended',
  ],
  plugins: ['simple-import-sort'],
  overrides: [
    {
      files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // this rule, if on, would require explicit return type on the `render` function
    '@typescript-eslint/explicit-function-return-type': 'off',

    // in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled
    '@typescript-eslint/no-var-requires': 'off',

    'no-unused-vars': 'off',
    'no-empty': 'off',

    'vue/multi-word-component-names': 'off',

    'vuejs-accessibility/alt-text': 'warn',
    'vuejs-accessibility/anchor-has-content': 'warn',
    'vuejs-accessibility/aria-props': 'warn',
    'vuejs-accessibility/aria-role': 'warn',
    'vuejs-accessibility/aria-unsupported-elements': 'warn',
    'vuejs-accessibility/click-events-have-key-events': 'warn',
    'vuejs-accessibility/form-control-has-label': 'warn',
    'vuejs-accessibility/heading-has-content': 'warn',
    'vuejs-accessibility/iframe-has-title': 'warn',
    'vuejs-accessibility/interactive-supports-focus': 'warn',
    'vuejs-accessibility/label-has-for': 'warn',
    'vuejs-accessibility/media-has-caption': 'warn',
    'vuejs-accessibility/mouse-events-have-key-events': 'warn',
    'vuejs-accessibility/no-access-key': 'warn',
    'vuejs-accessibility/no-autofocus': 'warn',
    'vuejs-accessibility/no-distracting-elements': 'warn',
    'vuejs-accessibility/no-onchange': 'warn',
    'vuejs-accessibility/no-redundant-roles': 'warn',
    'vuejs-accessibility/no-static-element-interactions': 'warn',
    'vuejs-accessibility/role-has-required-aria-props': 'warn',
    'vuejs-accessibility/tabindex-no-positive': 'warn',

    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
}
