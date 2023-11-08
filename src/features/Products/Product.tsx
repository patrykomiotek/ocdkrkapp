import { useApi } from "../../hooks/useApi";
import { ProductDto } from "./types/ProductDto";

type Props = {
  id: string;
};

// recO0oFJq1HetQPt0
export const Product = ({ id }: Props) => {
  const { data, isLoading, isError } = useApi<ProductDto>(`/products/${id}`);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (isError) {
    return <p>Error!</p>;
  }

  return (
    <div>
      <h1>Product</h1>
      <p>Name: {data.fields.name}</p>
      <p>Description: {data.fields.description}</p>
      <p>Price: ${data.fields.price}</p>
    </div>
  );
};
