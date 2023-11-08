import type { Meta } from "@storybook/react";

import { CreateProductForm } from "./CreateProductForm";

const meta = {
  title: "Features/Products/CreateProductForm",
  component: CreateProductForm,
  // tags: ["autodocs"],
} satisfies Meta<typeof CreateProductForm>;

export default meta;

export const _CreateProductForm = () => (
  <CreateProductForm onSubmit={() => null} />
);
