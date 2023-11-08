import { render, screen, fireEvent } from "@testing-library/react";
import { AuthCredentials } from "./AuthCredentials";
import { AuthProvider } from "./AuthContext";

describe("AuthCredentials component", () => {
  it("should display default value and change it after click on button", () => {
    render(
      <AuthProvider>
        <AuthCredentials />
      </AuthProvider>
    );
    expect(screen.getByText("YES", { exact: false })).toBeInTheDocument();
    expect(screen.getByText(/yes/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button"));

    expect(screen.getByText(/no/i)).toBeInTheDocument();
  });
});
