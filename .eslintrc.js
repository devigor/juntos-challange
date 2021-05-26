module.exports = {
  env: {
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'prettier'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.js', 'jsx'] }
    ],
    'import/prefer-default-export': 'off',
    'jsx-quotes': ['error', 'prefer-single']
  }
}
