import { render, screen, fireEvent } from "@testing-library/react";
import { Generator } from "./Generator";

describe("Generator component", () => {
  it("should have different values after click", () => {
    render(<Generator />);

    const id = screen.getByText(/[a-z0-9-]{36}/i).textContent;
    console.log("id: ", id);

    fireEvent.click(screen.getByRole("button"));

    const newId = screen.getByText(/[a-z0-9-]{36}/i).textContent;

    expect(newId).not.toBe(id);
  });
});
