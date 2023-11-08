import { ZodError } from "zod";
import { useApi } from "../../hooks/useApi";
import { validationSchema } from "./types/CreateProductDto";
import { ProductDto } from "./types/ProductDto";

type Props = {
  id: string;
};

// recO0oFJq1HetQPt0
export const Product = ({ id }: Props) => {
  const { data, isLoading, isError } = useApi<ProductDto>(`/products/${id}`);

  console.log("data: ", data);

  if (data) {
    try {
      validationSchema.parse(data.fields);
    } catch (e) {
      console.log(e);
      if (e instanceof ZodError) {
        console.error("zod error");
      }
    }
  }

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
