import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary",
    size: "m",
    primary: true,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
    size: "m",
    secondary: true,
  },
};

export const Success: Story = {
  args: {
    label: "Success",
    size: "m",
    success: true,
  },
};

export const Warning: Story = {
  args: {
    label: "Warning",
    size: "m",
    warning: true,
  },
};

export const Danger: Story = {
  args: {
    label: "Danger",
    size: "m",
    danger: true,
  },
};
