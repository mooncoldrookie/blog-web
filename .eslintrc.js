module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {},
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      extends: [
        'plugin:react/recommended',
        'airbnb',
        'airbnb-typescript',
        'prettier',
        'next',
        'plugin:react/jsx-runtime',
      ],
      plugins: ['react', '@typescript-eslint'],
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react/function-component-definition': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'react/no-unused-prop-types': 'off',
        'no-restricted-exports': 'off',
        'consistent-return': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'no-param-reassign': 'off',
        'react/self-closing-comp': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'no-plusplus': 'off',
        '@typescript-eslint/no-shadow': 'off',
        'react/no-array-index-key': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react/no-children-prop': 'off',
        'react/button-has-type': 'off',
        'import/no-named-as-default': 'off',
        'import/no-cycle': 'off',

        'react/jsx-curly-newline': [0],
        'react/state-in-constructor': [0],
        'react/static-property-placement': [0],
        'react/jsx-props-no-spreading': [0],
        'jsx-a11y/control-has-associated-label': [0],
        'react/jsx-fragments': [0],

        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        // allow twin.macro as devDependency
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
            ],
            pathGroups: [
              {
                pattern: '@/**',
                group: 'internal',
              },
            ],
            'newlines-between': 'always',
          },
        ],
      },
    },
  ],
}
