jest.mock("../../hooks/useApi", () => ({
  useApi: jest.fn(),
}));

import { render, screen } from "@testing-library/react";
import { ResponseState, useApi } from "../../hooks/useApi";
import { Product } from "./Product";
import { ProductDto } from "./types/ProductDto";

const mockedUseApi = useApi as jest.Mock<ResponseState<ProductDto>>;

const productMock = {
  id: "1234",
  fields: {
    name: "Product 1",
    description: "Lorem ipsum",
    price: 23,
  },
};

describe("Product component", () => {
  it("should display data", () => {
    mockedUseApi.mockImplementationOnce(() => ({
      data: productMock,
      isLoading: false,
      isError: false,
    }));
    render(<Product id="1234" />);
    expect(screen.getByText(/product 1/i)).toBeInTheDocument();
  });
  it("should display loading indicator", () => {
    mockedUseApi.mockImplementationOnce(() => ({
      data: undefined,
      isLoading: true,
      isError: false,
    }));
    render(<Product id="1234" />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it("should display error message", () => {
    mockedUseApi.mockImplementationOnce(() => ({
      data: undefined,
      isLoading: false,
      isError: true,
    }));
    render(<Product id="1234" />);
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });
});
