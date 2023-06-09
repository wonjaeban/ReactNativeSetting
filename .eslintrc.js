module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  // parserOptions: {
  //   ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
  //   sourceType: 'module', // Allows for the use of imports
  //   project: './tsconfig.json',
  //   tsconfigRootDir: './',
  // },

  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // uses typescript-specific linting rules
    'plugin:react/recommended', // uses react-specific linting rules
    'prettier/react', // disables react-specific linting rules that conflict with prettier
    'plugin:prettier/recommended', // uses react-specific linting rules
  ],
  plugins: [
    'react',
    'react-native',
    'import', // eslint-plugin-import for custom configure
  ],
  rules: {
    curly: 0,
    quotes: 0,
    'prefer-const': 1,
    'no-empty': 0,
    'no-shadow': 0,
    'dot-notation': 0,
    'no-unused-vars': 0,
    'no-useless-escape': 0,
    'no-constant-condition': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/ban-types': 1,
    '@typescript-eslint/triple-slash-reference': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'react-native/no-inline-styles': 0,
    'react/self-closing-comp': 0,
    'react/display-name': 0,
    'react/prop-types': 0,
    // import plugins
    'import/order': [
      'warn',
      {
        groups: [
          ['builtin', 'external'],
          ['internal'],
          ['parent', 'sibling', 'index'],
        ],
        pathGroups: [
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
  // https://github.com/import-js/eslint-import-resolver-typescript#readme
  settings: {
    'import/resolver': {
      typescript: {
        // alwaysTryTypes: true,
      },
    },
  },
};
