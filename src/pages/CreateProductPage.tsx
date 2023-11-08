import { Helmet } from "react-helmet-async";
import { ROUTE } from "../routes";
import { CreateProductForm } from "../features/Products/CreateProductForm";
import { CreateProductDto } from "../features/Products/types/CreateProductDto";

export const CreateProductPage = () => {
  const handleSubmit = (data: CreateProductDto) => {
    console.log("inside page: ", data);
  };

  return (
    <>
      <Helmet>
        <title>{ROUTE.CREATE_PRODUCT.title}</title>
      </Helmet>
      <div>
        <h1>Create product</h1>
        <CreateProductForm onSubmit={handleSubmit} />
      </div>
    </>
  );
};
