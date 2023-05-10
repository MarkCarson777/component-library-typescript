import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    // remove controls for button variants
    primary: {
      table: {
        disable: true,
      },
    },
    secondary: {
      table: {
        disable: true,
      },
    },
    success: {
      table: {
        disable: true,
      },
    },
    warning: {
      table: {
        disable: true,
      },
    },
    danger: {
      table: {
        disable: true,
      },
    },
    // add radio control for button size
    size: {
      options: ["xs", "s", "m", "l", "xl", "auto"],
      control: { type: "radio" },
    },
    // add default onClick action
    onClick: { action: "onClick" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    size: "xs",
    disabled: false,
    pending: false,
  },
  render: (args) => <Button {...args}>Primary</Button>,
};

export const Secondary: Story = {
  args: {
    secondary: true,
    size: "xs",
    disabled: false,
    pending: false,
  },
  render: (args) => <Button {...args}>Secondary</Button>,
};

export const Success: Story = {
  args: {
    success: true,
    size: "xs",
    disabled: false,
    pending: false,
  },
  render: (args) => <Button {...args}>Success</Button>,
};

export const Warning: Story = {
  args: {
    warning: true,
    size: "xs",
    disabled: false,
    pending: false,
  },
  render: (args) => <Button {...args}>Warning</Button>,
};

export const Danger: Story = {
  args: {
    danger: true,
    size: "xs",
    disabled: false,
    pending: false,
  },
  render: (args) => <Button {...args}>Danger</Button>,
};

export const Pending: Story = {
  args: {
    primary: true,
    size: "xs",
    pending: true,
  },
  render: (args) => <Button {...args}>Pending</Button>,
};

export const Disabled: Story = {
  args: {
    primary: true,
    size: "xs",
    disabled: true,
  },
  render: (args) => <Button {...args}>Disabled</Button>,
};

export const Icon: Story = {
  args: {
    primary: true,
    size: "xs",
    disabled: false,
    pending: false,
  },
  render: (args) => (
    <Button {...args}>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      Icon
    </Button>
  ),
};
