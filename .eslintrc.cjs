/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/require-default-prop": "off",
    "no-undef": "off",
    "@typescript-eslint/no-unused-vars": "off",
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
};
