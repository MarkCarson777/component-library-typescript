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
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
    size: "md",
  },
};
export const Success: Story = {
  args: {
    label: "Success",
    size: "md",
  },
};
export const Warning: Story = {
  args: {
    label: "Warning",
    size: "md",
  },
};
export const Danger: Story = {
  args: {
    label: "Danger",
    size: "md",
  },
};
