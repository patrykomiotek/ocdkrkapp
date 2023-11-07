import "./App.css";
import { Generator } from "./components/Generator";
import { RegistrationFormRefs } from "./components/RegistrationFormRefs/RegistrationFormRefs";
import { RegistrationFormRefsCustomInput } from "./components/RegistrationFormRefsCustomInput";
import { RegistrationFormState } from "./components/RegistrationFormState";

import { Text, Button } from "./ui";
// import { Text } from "./ui/Text/Text";
// import { Text as Kaczka } from "./ui/Text/Text";

function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}
      <div>
        <RegistrationFormRefsCustomInput />
        {/* <RegistrationFormRefs /> */}
        {/* <RegistrationFormState /> */}
        <Generator />
        <Text>Today is payday</Text>
        <Button label="Click me" type="submit" />
        <Button label="Click me" bgColor="carrot" color="emerald" />
      </div>
    </>
  );
}

export default App;
