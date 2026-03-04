import type { Meta, StoryObj } from '@storybook/angular';
import { HlmFieldError } from './hlm-field-error';
import { expect } from 'storybook/test';

const meta: Meta<HlmFieldError> = {
  component: HlmFieldError,
  title: 'Components/HlmFieldError',
};
export default meta;

type Story = StoryObj<HlmFieldError>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/hlm-field-error/gi)).toBeTruthy();
  },
};
