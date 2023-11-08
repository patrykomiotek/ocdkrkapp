import { render, screen } from "@testing-library/react";
import { Product } from "./Product";

describe("Product component with MSW", () => {
  it("should display data", async () => {
    render(<Product id="1234" />);

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
    // expect(await screen.findByText(/product 1/i)).toBeInTheDocument();
  });
});
