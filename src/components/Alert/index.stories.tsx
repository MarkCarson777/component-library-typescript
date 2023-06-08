import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "./";

const meta: Meta<typeof Alert> = {
  title: "components/Alert",
  component: Alert,
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  args: {
    message: "This is a message",
    type: "success",
  },
};
export const Info: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  args: {
    message: "This is a message",
    type: "info",
  },
};
export const Warning: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  args: {
    message: "This is a message",
    type: "warning",
  },
};
export const Error: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  args: {
    message: "This is a message",
    type: "error",
  },
};
