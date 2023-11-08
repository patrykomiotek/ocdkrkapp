import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ROUTE } from "../routes";
import { CreateProductForm } from "../features/Products/CreateProductForm";
import { CreateProductDto } from "../features/Products/types/CreateProductDto";
import { createProduct } from "../features/Products/service/products";

export const CreateProductPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data: CreateProductDto) => {
    console.log("inside page: ", data);
    try {
      await createProduct(data);
      navigate(ROUTE.PRODUCTS.path);
    } catch {
      //
    }
  };

  return (
    <>
      <Helmet>
        <title>{ROUTE.CREATE_PRODUCT.title}</title>
      </Helmet>
      <div>
        <h1>Create product</h1>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <CreateProductForm onSubmit={handleSubmit} />
      </div>
    </>
  );
};
