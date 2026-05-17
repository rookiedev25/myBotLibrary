export default [
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        document: 'readonly',
        window: 'readonly',
        console: 'readonly',
      },
    },
    plugins: {
      react: await import('eslint-plugin-react'),
      'react-hooks': await import('eslint-plugin-react-hooks'),
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
    },
  },
]
