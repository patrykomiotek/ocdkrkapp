import { useApi } from "../../hooks/useApi";
import { ProductDto } from "../../types/ProductDto";

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
      <h2>Products</h2>
      <p>Name: {data.fields.name}</p>
    </div>
  );
};
