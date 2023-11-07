import { useApi } from "../../hooks/useApi";
import { ProductResponse } from "./types/ProductReponse";

export const ProductsList = () => {
  const { data, isLoading, isError } = useApi<ProductResponse>(`/products`);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (isError) {
    return <p>Error!</p>;
  }

  const products = data.records;

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((elem) => (
          <li key={elem.id}>{elem.fields.name}</li>
        ))}
      </ul>
    </div>
  );
};
