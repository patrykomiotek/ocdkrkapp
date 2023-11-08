import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "../../ui";

interface CreateProductDto {
  name: string;
  description: string;
  price: number;
}

export const CreateProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductDto>();

  const createProduct: SubmitHandler<CreateProductDto> = (data) => {
    console.log(data);
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(createProduct)}>
      <Input label="Name" {...register("name", { required: true })} />
      {errors.name && <p className="text-red-500">Name is required</p>}
      <Input
        label="Description"
        {...register("description", { required: true })}
      />
      {errors.description && (
        <p className="text-red-500">Description is required</p>
      )}
      <Input
        label="Price"
        type="number"
        {...register("price", { required: true, valueAsNumber: true })}
      />
      {errors.price && <p className="text-red-500">Price is required</p>}
      <Button label="Submit" type="submit" />
    </form>
  );
};
