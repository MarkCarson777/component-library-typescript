import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./";

import avatar from "../../assets/images/avatar.jpg";

const meta: Meta<typeof Avatar> = {
  title: "components/Avatar",
  component: Avatar,
  argTypes: {
    onClick: { action: "onClick" },
  },
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
    shape: "circle",
    imageUrl: avatar,
  },
};

export const ExtraLarge: Story = {
  // remove no control warning from Storybook
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  args: {
    name: "Default",
    size: "xl",
    shape: "circle",
    imageUrl: avatar,
  },
};

export const Square: Story = {
  // remove no control warning from Storybook
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  args: {
    name: "Default",
    size: "m",
    shape: "square",
    imageUrl: avatar,
  },
};

export const Rectangle: Story = {
  // remove no control warning from Storybook
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  args: {
    name: "Default",
    size: "m",
    shape: "rectangle",
    imageUrl: avatar,
  },
};
