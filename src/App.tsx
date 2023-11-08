import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { HelmetProvider } from "react-helmet-async";

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
import { ProductsList } from "./features/Products";
// import { Text } from "./ui/Text/Text";
// import { Text as Kaczka } from "./ui/Text/Text";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Product } from "./features/Products/Product";
import { ProductPage } from "./pages/Product";
import { PrivateRoute } from "./components/PrivateRoute";
import { Layout } from "./components/Layout";
import { ROUTE } from "./routes";

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

  const router = createBrowserRouter([
    {
      path: ROUTE.ROOT.path,
      element: <Layout />,
      children: [
        {
          path: ROUTE.ROOT.path,
          element: (
            <PrivateRoute>
              <ProductsList />
            </PrivateRoute>
          ),
        },
        {
          path: ROUTE.PRODUCT.path,
          element: <ProductPage />,
        },
      ],
      // errorElement: <Page404 />,
    },
    // {
    //   path: "/admin",
    //   element: <AdminLayout />,
    //   children: [],
    // },
  ]);

  return (
    <>
      <div>
        <ErrorBoundary fallback={<p>Oh no error!</p>}>
          <HelmetProvider>
            <ThemeProvider>
              <AuthProvider>
                <RouterProvider router={router} />
                {/* <AuthInfo /> */}
              </AuthProvider>
              {/* <ThemeSwitcher /> */}
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
          </HelmetProvider>
        </ErrorBoundary>
      </div>
    </>
  );
}

export default App;
