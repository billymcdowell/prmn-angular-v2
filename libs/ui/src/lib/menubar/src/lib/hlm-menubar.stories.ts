import type { Meta, StoryObj } from '@storybook/angular';
import { HlmMenubar } from './hlm-menubar';
const meta: Meta<HlmMenubar> = {
  component: HlmMenubar,
  title: 'Components/HlmMenubar',
};
export default meta;

type Story = StoryObj<HlmMenubar>;

export const Primary: Story = {
  args: {},
};