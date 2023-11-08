import { Helmet } from "react-helmet-async";
import { ROUTE } from "../routes";

export const CreateProductPage = () => {
  return (
    <>
      <Helmet>
        <title>{ROUTE.CREATE_PRODUCT.title}</title>
      </Helmet>
      <div>
        <h1>Create product</h1>
      </div>
    </>
  );
};
