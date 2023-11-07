import { MouseEventHandler, useEffect, useRef, useState } from "react";
import "./App.css";
import { Generator } from "./components/Generator";
import { RegistrationFormRefs } from "./components/RegistrationFormRefs/RegistrationFormRefs";
import { RegistrationFormRefsCustomInput } from "./components/RegistrationFormRefsCustomInput";
import { RegistrationFormState } from "./components/RegistrationFormState";

import { Text, Button, MagicButton } from "./ui";
import { RegistrationPage } from "./pages/RegistrationPage";
import { AuthInfo } from "./components/AuthContext/AuthInfo";
import {
  AuthContext,
  AuthProvider,
} from "./components/AuthContext/AuthContext";
import { ThemeProvider } from "./components/Theme/ThemeContext";
import { ThemeSwitcher } from "./components/Theme/ThemeSwitcher";
import { ErrorBoundary } from "./components/ErrorBoundary";
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
      <div>
        <ErrorBoundary fallback={<p>Oh no error!</p>}>
          <ThemeProvider>
            <AuthProvider>
              <AuthInfo />
            </AuthProvider>
            <ThemeSwitcher />
          </ThemeProvider>

          {/* <AuthInfo /> */}

          {/* <RegistrationPage /> */}

          {/* <MagicButton
          ref={buttonRef}
          label="Click me"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        /> */}

          {/* <RegistrationFormRefsCustomInput /> */}
          {/* <RegistrationFormRefs /> */}
          {/* <RegistrationFormState /> */}
          {/* <Generator /> */}
          {/* <Button label="Click me" type="submit" /> */}
          {/* <Button label="Click me" bgColor="carrot" color="emerald" /> */}
        </ErrorBoundary>
      </div>
    </>
  );
}

export default App;
