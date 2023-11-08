import { increment, incrementByAmount, reducer } from "./counterSlice";
import { store } from "../../store";

describe("Reducer", () => {
  it("should change reducer values", () => {
    const state = {
      value: 0,
    };
    // const action = { type: "counter/increment" };
    const action = increment();
    const values = reducer(state, action);
    expect(values).toEqual({ value: 1 });
  });

  it("should change store values", () => {
    // const state = store.getState();
    // store.dispatch({ type: "counter/increment" });
    // store.dispatch(increment());
    store.dispatch(incrementByAmount(5));

    // console.log("state", store.getState());
    expect(store.getState()).toEqual({ xyz: { value: 5 } });
  });
});
