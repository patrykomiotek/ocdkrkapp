import { Helmet } from "react-helmet-async";
import { ROUTE } from "../routes";
import { CreateProductForm } from "../features/Products/CreateProductForm";

export const CreateProductPage = () => {
  return (
    <>
      <Helmet>
        <title>{ROUTE.CREATE_PRODUCT.title}</title>
      </Helmet>
      <div>
        <h1>Create product</h1>
        <CreateProductForm />
      </div>
    </>
  );
};
