import process from 'node:process';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';
import { TanStackRouterRspack } from '@tanstack/router-plugin/rspack';

export default defineConfig({
  html: {
    template: './index.html',
  },
  plugins: [
    pluginReact(),
    // 模块联邦
    pluginModuleFederation({
      name: 'rsbuild_starter',
      // 生产者配置
      exposes: {
        './button': './src/components/Button/index.tsx',
      },
      // 消费者配置
      remotes: {
        // federation_provider: 'federation_provider@http://localhost:3005/mf-manifest.json',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  tools: {
    rspack: {
      plugins: [
        process.env.RSDOCTOR === 'true' && new RsdoctorRspackPlugin({}),
        TanStackRouterRspack({
          target: 'react',
          autoCodeSplitting: true,
        }),
      ],
    },
  },
});
