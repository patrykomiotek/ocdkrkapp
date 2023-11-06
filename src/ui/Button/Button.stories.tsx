import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "UI/Atoms/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Click me",
  },
};

export const WithColors: Story = {
  args: {
    label: "Click me",
    bgColor: "carrot",
    color: "emerald",
  },
};

export const WithAnotherColors: Story = {
  args: {
    label: "Click me",
    bgColor: "peter-river",
    color: "carrot",
  },
};
