import { CreateProductDto } from "../types/CreateProductDto";
import { ProductDto } from "../types/ProductDto";
import { ProductResponse } from "../types/ProductResponse";
import { API_BASE_URL, TOKEN, api } from "./config";

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

export const createProduct = (data: CreateProductDto) => {
  const payload = {
    records: [
      {
        fields: data,
      },
    ],
  };

  // api.post<CreateProductDto>(`${API_BASE_URL}/payload`)

  return fetch(`${API_BASE_URL}/products`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(payload),
  });
};
