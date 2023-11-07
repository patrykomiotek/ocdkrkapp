import type { Meta, StoryObj } from "@storybook/react";

import { ProductsList } from "./ProductsList";

const meta = {
  title: "Features/Products/ProductsList",
  component: ProductsList,
  // tags: ["autodocs"],
} satisfies Meta<typeof ProductsList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithSuccessResponse: Story = {};
