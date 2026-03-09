import { applicationConfig } from '@storybook/angular';
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { withThemeByClassName } from '@storybook/addon-themes';

const storybookAppConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideRouter([])],
};

export const decorators = [
  applicationConfig(storybookAppConfig),
  withThemeByClassName({
    themes: {
      light: '',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];

export const parameters = {
  docs: {
    autodocs: true,
    defaultName: 'Default',
  },
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
};