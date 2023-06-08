import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./";

import avatar from "../../assets/images/avatar.jpg";

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
    name: "Default",
    size: "m",
    imageUrl: avatar,
  },
};
