import { createContext, useContext } from "react";

interface ContextType {
  value: number;
  changeValue: () => void;
}

export const Context = createContext<ContextType>({
  value: 0,
  changeValue: () => null,
}); // outside context

/** current values
 * const [state, setState] = useState(0)
 / <Context.Provider value={{ value: state, changeValue: setState }}>
 / <Button />
 / </Context.Provider>
 / <Context.Provider value={{ value: state, changeValue: setState }}>
/ <Button />
 / <Context.Provider value={{ value: state, changeValue: setState }}>
 */

//  <Button />
const Button = () => {
  const context = useContext(Context);

  return (
    <div>
      Value: {context.value}
      <button onClick={() => context.changeValue()}>Click me</button>
    </div>
  );
};
