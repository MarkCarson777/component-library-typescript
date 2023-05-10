import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      options: ["xs", "s", "m", "l", "xl", "auto"],
      control: { type: "select" },
    },
    onClick: { action: "onClick" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary",
    primary: true,
    size: "xs",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
    secondary: true,
    size: "xs",
  },
};

export const Success: Story = {
  args: {
    label: "Success",
    success: true,
    size: "xs",
  },
};

export const Warning: Story = {
  args: {
    label: "Warning",
    warning: true,
    size: "xs",
  },
};

export const Danger: Story = {
  args: {
    label: "Danger",
    danger: true,
    size: "xs",
  },
};

export const Pending: Story = {
  args: {
    label: "Pending",
    primary: true,
    size: "xs",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    primary: true,
    size: "xs",
  },
};

export const Icon: Story = {
  args: {
    label: "Icon",
    primary: true,
    size: "xs",
  },
};
