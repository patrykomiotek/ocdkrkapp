import type { Meta, StoryObj } from "@storybook/react";

import { Generator } from "./Generator";

const meta = {
  title: "Components/Generator",
  component: Generator,
  // tags: ["autodocs"],
} satisfies Meta<typeof Generator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
