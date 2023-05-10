import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
  render: (args) => <Button {...args}>Primary</Button>,
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
    secondary: true,
    size: "xs",
  },
  render: (args) => <Button {...args}>Secondary</Button>,
};

export const Success: Story = {
  args: {
    label: "Success",
    success: true,
    size: "xs",
  },
  render: (args) => <Button {...args}>Success</Button>,
};

export const Warning: Story = {
  args: {
    label: "Warning",
    warning: true,
    size: "xs",
  },
  render: (args) => <Button {...args}>Warning</Button>,
};

export const Danger: Story = {
  args: {
    label: "Danger",
    danger: true,
    size: "xs",
  },
  render: (args) => <Button {...args}>Danger</Button>,
};

export const Pending: Story = {
  args: {
    label: "Pending",
    primary: true,
    size: "xs",
  },
  render: (args) => <Button {...args}>Pending</Button>,
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    primary: true,
    size: "xs",
  },
  render: (args) => <Button {...args}>Disabled</Button>,
};

export const Icon: Story = {
  args: {
    label: "Icon",
    primary: true,
    size: "xs",
  },
  render: (args) => (
    <Button {...args}>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      Icon
    </Button>
  ),
};
