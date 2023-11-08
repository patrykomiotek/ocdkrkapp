import { renderHook } from "@testing-library/react";

import { useViewPort } from "./useViewPort";

describe("useViewApi hook", () => {
  it("should return default values", () => {
    const { result } = renderHook(() => useViewPort());

    expect(result.current).toEqual({ x: 1024, y: 768 });
  });
});
