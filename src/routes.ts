export const ROUTE = {
  ROOT: {
    path: "/",
    title: "Ocado Krk",
  },
  PRODUCTS: {
    path: "/",
    title: "Products",
  },
  CREATE_PRODUCT: {
    path: "/products/create",
    title: "Create product",
  },
  PRODUCT: {
    path: "/products/:id",
    dynamicPath: (id: string) => `/products/${id}`,
    title: "Product detail",
  },
};
