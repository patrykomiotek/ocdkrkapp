export const ROUTE = {
  ROOT: {
    path: "/",
    title: "Ocado Krk",
  },
  PRODUCTS: {
    path: "/products",
    title: "Products",
  },
  PRODUCT: {
    path: "/products/:id",
    dynamicPath: (id: string) => `/products/${id}`,
    title: "Product detail",
  },
};
