import type { Meta, StoryObj } from '@storybook/angular';
import { HlmScrollArea } from './hlm-scroll-area';

const meta: Meta<HlmScrollArea> = {
  component: HlmScrollArea,
  title: 'Components/HlmScrollArea',
};
export default meta;

type Story = StoryObj<HlmScrollArea>;

export const Primary: Story = {
  args: {},
};