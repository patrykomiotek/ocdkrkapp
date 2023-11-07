import type { Meta, StoryObj } from "@storybook/react";

import { MagicButton } from "./MagicButton";

const meta = {
  title: "UI/Atoms/MagicButton",
  component: MagicButton,
  tags: ["autodocs"],
} satisfies Meta<typeof MagicButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Click me",
  },
};
