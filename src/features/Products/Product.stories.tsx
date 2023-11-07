import type { Meta, StoryObj } from "@storybook/react";

import { Product } from "./Product";

const meta = {
  title: "Features/Products/Product",
  component: Product,
  // tags: ["autodocs"],
} satisfies Meta<typeof Product>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithSuccessResponse = () => <Product id="recO0oFJq1HetQPt0" />;
