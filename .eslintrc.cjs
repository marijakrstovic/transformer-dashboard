module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'plugin:vue/vue3-recommended',
      '@vue/eslint-config-typescript/recommended'
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      // custom rules (optional)
      'vue/multi-word-component-names': 'off',
      'vue/no-multiple-template-root': 'off'
    }
  }
  