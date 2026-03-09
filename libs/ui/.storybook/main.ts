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
    if (!config.output) {
      config.output = {};
    }
    // Ensure Storybook assets & chunks load from the GitHub Pages project path
    config.output.publicPath = '/prmn-angular-v2';
    return config;
  },
};

export default config;
