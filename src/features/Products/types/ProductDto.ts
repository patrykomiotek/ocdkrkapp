export interface ProductDto {
  id: string;
  fields: {
    name: string;
    description: string;
    price: number;
  };
}
