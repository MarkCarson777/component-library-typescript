import type { Meta, StoryObj } from "@storybook/react";

import Avatar from "./";

const meta: Meta<typeof Avatar> = {
  title: "components/Avatar",
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  // remove no control warning from Storybook
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  args: {
    name: "Mark",
    size: 40,
    imageUrl: "nope",
  },
};
