import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { Product } from "../features/Products/Product";

export const ProductPage = () => {
  const { id } = useParams();

  if (id) {
    return (
      <>
        <Helmet>
          <title>Product {id}</title>
        </Helmet>
        <Product id={id} />
      </>
    );
  }

  return "Not found";
};
