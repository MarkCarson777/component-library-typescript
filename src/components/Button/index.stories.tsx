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
    size: "md",
    primary: true,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
    size: "md",
    secondary: true,
  },
};

export const Success: Story = {
  args: {
    label: "Success",
    size: "md",
    success: true,
  },
};

export const Warning: Story = {
  args: {
    label: "Warning",
    size: "md",
    warning: true,
  },
};

export const Danger: Story = {
  args: {
    label: "Danger",
    size: "md",
    danger: true,
  },
};
