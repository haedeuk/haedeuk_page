import { codeInspectorPlugin } from 'code-inspector-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import vitePluginSvgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    vitePluginSvgr({ include: '**/*.svg' }),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint src',
        useFlatConfig: true,
      },
      overlay: {
        badgeStyle: 'width:fit-content;font-size:14px;',
      },
    }),
    codeInspectorPlugin({
      bundler: 'vite',
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
        `@use '@/utils/styles/mediaQuery.scss' as media;
        @use '@/styles/font.scss' as font;
        @use '@/styles/global.scss';
        `,
      },
    },
  },
  server: {
    host: true,
    port: 3000,
  },
});
