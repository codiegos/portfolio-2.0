import next from 'eslint-config-next'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier'

const config = [
  {
    ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'],
  },
  ...next,
  ...nextCoreWebVitals,
  ...nextTypescript,
  prettier,
  {
    rules: {
      'jsx-quotes': ['error', 'prefer-single'],
      'react/no-unescaped-entities': 'off',
    },
  },
]

export default config
