import type { Meta, StoryObj } from '@storybook/angular';
import { HlmKbd } from './hlm-kbd';

const meta: Meta<HlmKbd> = {
  component: HlmKbd,
  title: 'Components/HlmKbd',
};
export default meta;

type Story = StoryObj<HlmKbd>;

export const Primary: Story = {
  args: {},
};