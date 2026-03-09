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
    // Use relative asset paths so Storybook works from any subfolder (e.g. GitHub Pages `/prmn-angular-v2/`)
    config.output = {
      ...(config.output ?? {}),
      publicPath: './',
    };
    return config;
  },
};

export default config;
