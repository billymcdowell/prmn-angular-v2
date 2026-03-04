import type { Meta, StoryObj } from '@storybook/angular';
import { HlmResizableGroup } from './hlm-resizable-group';

const meta: Meta<HlmResizableGroup> = {
  component: HlmResizableGroup,
  title: 'Components/HlmResizableGroup',
};
export default meta;

type Story = StoryObj<HlmResizableGroup>;

export const Primary: Story = {
  args: {},
};