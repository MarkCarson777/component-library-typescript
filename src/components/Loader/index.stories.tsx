import type { Meta, StoryObj } from "@storybook/react";

import { Loader } from "./";

const meta: Meta<typeof Loader> = {
  title: "components/Loader",
  component: Loader,
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  // remove no control warning from Storybook
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};
