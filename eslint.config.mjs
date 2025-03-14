import antfu from '@antfu/eslint-config';
import pluginQuery from '@tanstack/eslint-plugin-query';

export default antfu(
  {
    react: true,
    stylistic: {
      semi: true,
    },
    ignores: [
      'scripts',
      'dist',
      'tsconfig.json',
    ],
    plugins: {
      '@tanstack/query': pluginQuery,
    },
    rules: {
      '@tanstack/query/exhaustive-deps': 'error',
    },
  },
);
