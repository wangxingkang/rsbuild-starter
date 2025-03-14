import * as path from 'node:path';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
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
    // 模块联邦
    pluginModuleFederation({
      name: 'pansy_consumer',
      remotes: {
        // federation_provider: 'pansy_provider@http://localhost:3000/mf-manifest.json',
      },
      shared: ['react', 'react-dom'],
    }),
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
