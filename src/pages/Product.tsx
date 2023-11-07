import { useParams } from "react-router-dom";
import { Product } from "../features/Products/Product";

export const ProductPage = () => {
  const { id } = useParams();

  if (id) {
    return <Product id={id} />;
  }

  return "Not found";
};