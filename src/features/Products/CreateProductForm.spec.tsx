import { render, screen, fireEvent, act } from "@testing-library/react";
import { CreateProductForm } from "./CreateProductForm";

describe("CreateProductForm", () => {
  it("should validate name and price field", async () => {
    const handleSubmit = jest.fn();
    const { debug } = render(<CreateProductForm onSubmit={handleSubmit} />);

    // act(() => {
    fireEvent.click(screen.getByRole("button", { name: /submit/i })); // label
    // expect(handleSubmit).toHaveBeenCalled();
    // await userEvent.click(screen.getByRole("button", { name: /submit/i }))
    // });

    // expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    const validationError = await screen.findByText(/name is required/i);
    // expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    expect(validationError).toBeInTheDocument();

    debug();
  });
});
