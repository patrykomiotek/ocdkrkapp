import { Dispatch, SetStateAction, createContext, useState } from "react";

interface ContextType {
  isLoggedIn: boolean;
  // toggleLoggedIn: Dispatch<SetStateAction<boolean>>;
  toggle: () => void;
  logIn: () => void;
  logOut: () => void;
}

export const AuthContext = createContext<ContextType>({
  isLoggedIn: false,
  // toggleLoggedIn: () => null,
  toggle: () => null,
  logIn: () => null,
  logOut: () => null,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const toggle = () => setLoggedIn((value) => !value);
  const logIn = () => setLoggedIn(true);
  const logOut = () => setLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, toggle, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
