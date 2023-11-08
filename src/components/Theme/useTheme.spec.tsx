import { act, renderHook } from "@testing-library/react";
import { Theme, useTheme } from "./ThemeContext";

describe("useTheme hook", () => {
  it("should toggle values", () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe(Theme.DARK);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.theme).toBe(Theme.LIGHT);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.theme).toBe(Theme.DARK);
  });
});
