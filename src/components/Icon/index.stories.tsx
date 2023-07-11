import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "./";

const meta: Meta<typeof Icon> = {
  title: "components/Icon",
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  args: {
    icon: "Search",
    color: "red",
  },
};
