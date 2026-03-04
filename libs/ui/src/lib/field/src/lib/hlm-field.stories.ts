import type { Meta, StoryObj } from '@storybook/angular';
import { HlmField } from './hlm-field';

const meta: Meta<HlmField> = {
  component: HlmField,
  title: 'Components/HlmField',
};
export default meta;

type Story = StoryObj<HlmField>;

export const Primary: Story = {
  args: {},
};