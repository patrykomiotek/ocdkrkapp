import type { Meta, StoryObj } from "@storybook/react";

import { ProductsList } from "./ProductsList";
import { rest } from "msw";
import { API_URL, productsMockData } from "../../mocks/handlers";
import { MemoryRouter } from "react-router-dom";

const meta = {
  title: "Features/Products/ProductsList",
  component: ProductsList,
} satisfies Meta<typeof ProductsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _ProductList = () => (
  <MemoryRouter initialEntries={["/"]}>
    <ProductsList />
  </MemoryRouter>
);
_ProductList.parameters = {
  msw: {
    handlers: [
      rest.get(`${API_URL}/products`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(productsMockData));
      }),
    ],
  },
};

export const _ProductListWith200ButWithoutData = () => (
  <MemoryRouter initialEntries={["/"]}>
    <ProductsList />
  </MemoryRouter>
);
_ProductListWith200ButWithoutData.parameters = {
  msw: {
    handlers: [
      rest.get(`${API_URL}/products`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({}));
      }),
    ],
  },
};

export const _ProductListWith500 = () => (
  <MemoryRouter initialEntries={["/"]}>
    <ProductsList />
  </MemoryRouter>
);
_ProductListWith500.parameters = {
  msw: {
    handlers: [
      rest.get(`${API_URL}/products`, (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({}));
      }),
    ],
  },
};
