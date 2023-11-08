import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { Product } from "../features/Products/Product";
import { ROUTE } from "../routes";

export const ProductPage = () => {
  const { id } = useParams();

  if (id) {
    return (
      <>
        <Helmet>
          <title>{ROUTE.PRODUCT.title}</title>
        </Helmet>
        <Product id={id} />
      </>
    );
  }

  return "Not found";
};
