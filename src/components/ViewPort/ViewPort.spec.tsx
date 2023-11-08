// option 1
// jest.mock("../../hooks/useViewPort", () => {
//   return {
//     useViewPort: jest.fn().mockImplementation(() => ({ x: 100, y: 2000 })),
//   };
// });

// option 2
// jest.mock("../../hooks/useViewPort", () => {
//   const actual = jest.requireActual("../../hooks/useViewPort");
//   return {
//     ...actual,
//     useViewPort: jest.fn().mockImplementation(() => ({ x: 100, y: 2000 })),
//   };
// });

jest.mock("../../hooks/useViewPort", () => {
  return {
    useViewPort: jest.fn(),
  };
});

import { render, screen } from "@testing-library/react";
import { ViewPort } from "./ViewPort";
import { useViewPort } from "../../hooks/useViewPort";

const mockedUseViewPort = useViewPort as jest.Mock; // TS

describe("ViewPort component", () => {
  it("should display default values", () => {
    mockedUseViewPort.mockImplementation(() => ({ x: 100, y: 2000 }));
    render(<ViewPort />);

    expect(screen.getByText(/size x: 100 y: 2000/i)).toBeInTheDocument();
  });

  it("should display default values 200x200", () => {
    mockedUseViewPort.mockImplementation(() => ({ x: 200, y: 200 }));
    render(<ViewPort />);

    expect(screen.getByText(/size x: 200 y: 200/i)).toBeInTheDocument();
  });
});
