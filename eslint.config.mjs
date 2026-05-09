import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      // Slide content frequently uses straight apostrophes inside JSX text
      // (e.g. "we're", "what's"). Escaping them adds noise without value.
      'react/no-unescaped-entities': 'off',
      // Slides do their own light DOM measurements via refs during render
      // for sizing/positioning; the new react-hooks rules in React 19's
      // ESLint plugin flag these patterns. They predate this upgrade and
      // should be revisited as a separate refactor task.
      'react-hooks/refs': 'warn',
      'react-hooks/set-state-in-effect': 'warn',
      // Existing slide components occasionally use `any` for legacy props
      // and dangerouslySetInnerHTML for raw HTML inserts. Tighten in a
      // separate cleanup pass.
      '@typescript-eslint/no-explicit-any': 'warn',
      'react/no-danger': 'warn',
    },
  },
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'coverage/**',
    'next-env.d.ts',
    'public/**',
  ]),
]);
