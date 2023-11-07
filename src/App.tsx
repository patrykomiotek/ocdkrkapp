import { MouseEventHandler, useEffect, useRef } from "react";
import "./App.css";
import { Generator } from "./components/Generator";
import { RegistrationFormRefs } from "./components/RegistrationFormRefs/RegistrationFormRefs";
import { RegistrationFormRefsCustomInput } from "./components/RegistrationFormRefsCustomInput";
import { RegistrationFormState } from "./components/RegistrationFormState";

import { Text, Button, MagicButton } from "./ui";
// import { Text } from "./ui/Text/Text";
// import { Text as Kaczka } from "./ui/Text/Text";

function App() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "#F24727";
    }
  }, []);

  const handleMouseEnter: MouseEventHandler<HTMLButtonElement> = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "#17A789";
    }
  };

  const handleMouseLeave: MouseEventHandler<HTMLButtonElement> = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "#293250";
    }
  };

  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}
      <div>
        <MagicButton
          ref={buttonRef}
          label="Click me"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        {/* <RegistrationFormRefsCustomInput /> */}
        {/* <RegistrationFormRefs /> */}
        {/* <RegistrationFormState /> */}
        {/* <Generator /> */}
        {/* <Text>Today is payday</Text> */}
        {/* <Button label="Click me" type="submit" /> */}
        {/* <Button label="Click me" bgColor="carrot" color="emerald" /> */}
      </div>
    </>
  );
}

export default App;
