import { useDispatch, useSelector, useStore } from "react-redux";
import { Button } from "../../ui";
import { RootState } from "../../store";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../features/Counter/counterSlice";

export const Counter = () => {
  const value = useSelector((state: RootState) => state.xyz.value);
  const dispatch = useDispatch();
  // const store = useStore();

  // { type: 'counter/increment' }

  return (
    <div>
      <Button label="-" onClick={() => dispatch(decrement())} />
      <p>{value}</p>
      <Button label="+" onClick={() => dispatch(increment())} />
    </div>
  );
};
