import * as path from 'node:path';
import { pluginPreview } from '@rspress/plugin-preview';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  base: '/docs/',
  root: path.join(__dirname, 'docs'),
  title: 'Rsbuild Starter',
  icon: '/logo.png',
  logo: '/logo.png',
  logoText: 'Rsbuild Starter',
  markdown: {
    checkDeadLinks: true,
  },
  route: {
    cleanUrls: true,
  },
  plugins: [
    pluginPreview({}),
  ],
  themeConfig: {
    enableContentAnimation: true,
    enableAppearanceAnimation: false,
    lastUpdated: true,
    hideNavbar: 'auto',
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/wangxingkang/rsbuild-starter',
      },
    ],
  },
  builderConfig: {
    resolve: {
      alias: {},
    },
  },
});
