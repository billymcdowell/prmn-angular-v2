// .storybook/main.ts
import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  webpackFinal: async (config) => {
    config.output = {
      ...(config.output ?? {}),
      publicPath: process.env['NODE_ENV'] === 'production' 
        ? '/prmn-angular-v2/' 
        : '/',
    };
    return config;
  },
};

export default config;