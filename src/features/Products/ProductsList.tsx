import { useApi } from "../../hooks/useApi";
import { fetchProducts } from "./service/products";
import { ProductResponse } from "./types/ProductResponse";

export const ProductsList = () => {
  // const { data, isLoading, isError } = useQuery<ProductResponse>(`/products`);
  const { data, isLoading, isError } = useApi<ProductResponse>(`/products`);
  // const { data, isLoading, isError } = useApi<ProductResponse>(fetchProducts);

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
      {/* <button onClick={() => fetchProducts()}>Revalidate</button> */}
    </div>
  );
};
