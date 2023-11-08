import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Input } from "../../ui";
import { CreateProductDto, validationSchema } from "./types/CreateProductDto";
// import { CreateProductDto } from "./types/CreateProductDto";

type Props = {
  onSubmit: (data: CreateProductDto) => void;
};

export const CreateProductForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductDto>({
    resolver: zodResolver(validationSchema),
  });

  const createProduct: SubmitHandler<CreateProductDto> = (data) => {
    console.log(data);
    onSubmit(data);
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(createProduct)}>
      <Input label="Name" {...register("name", { required: true })} />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      <Input
        label="Description"
        {...register("description", { required: true })}
      />
      {errors.description && (
        <p className="text-red-500">{errors.description.message}</p>
      )}
      <Input
        label="Price"
        type="number"
        {...register("price", { required: true, valueAsNumber: true })}
      />
      {errors.price && <p className="text-red-500">{errors.price.message}</p>}
      <Button label="Submit" type="submit" />
    </form>
  );
};
