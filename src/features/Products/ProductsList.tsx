import { Link } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import { fetchProducts } from "./service/products";
import { ProductResponse } from "./types/ProductResponse";
import { Helmet } from "react-helmet-async";

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
    <>
      <Helmet>Product list</Helmet>
      <div>
        <h2>Products</h2>
        <ul>
          {products.map((elem) => (
            <li key={elem.id}>
              <Link to={`/product/${elem.id}`}>{elem.fields.name}</Link>
              {/* <a href=""></a> */}
            </li>
          ))}
        </ul>
        {/* <button onClick={() => fetchProducts()}>Revalidate</button> */}
      </div>
    </>
  );
};
