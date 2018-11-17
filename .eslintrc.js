module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard', 'prettier/standard', 'prettier/vue'],
  // plugins: ['prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'prettier/prettier': ['warn'],
    'max-len': ['warn', {'code': 120}],
    'vue/name-property-casing': ["warn", "PascalCase|kebab-case"],
    'space-before-function-paren': ['warn', 'never'],
    'no-unused-vars': 'warn'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
