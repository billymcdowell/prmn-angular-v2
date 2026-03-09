import { applicationConfig } from '@storybook/angular';
import { appConfig } from '../../../apps/prmn-angular-v2/src/app/app.config';

export const decorators = [
  applicationConfig(appConfig),
];

export const parameters = {
  docs: {
    autodocs: true,
    defaultName: 'Default',
  },
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
};