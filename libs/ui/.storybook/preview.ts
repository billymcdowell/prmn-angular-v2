import { applicationConfig } from '@storybook/angular';

export const decorators = [];
export const parameters = {
  docs: {
    autodocs: true,
    defaultName: 'Default',
  },
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
};