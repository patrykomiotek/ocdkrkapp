import { ProductDto } from "../types/ProductDto";
import { ProductResponse } from "../types/ProductResponse";
import { api } from "./config";

export const fetchProducts = () => {
  return api.get<ProductResponse>("/products");
};

// export const fetchProduct = (id: ProductDto["id"]) => {
//   return api.get<ProductDto>(`/products/${id}`);
// };

export const fetchProduct = async (id: ProductDto["id"]) => {
  try {
    const response = await api.get<ProductDto>(`/products/${id}`);

    // parse

    return response.data;
  } catch {
    //
  }
};
