import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from "./";

const meta: Meta<typeof Dropdown> = {
  title: "components/Dropdown",
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  args: {
    options: [
      { value: "valueOne", label: "labelOne" },
      { value: "valueTwo", label: "labelTwo" },
      { value: "valueThree", label: "labelThree" },
    ],
  },
};
