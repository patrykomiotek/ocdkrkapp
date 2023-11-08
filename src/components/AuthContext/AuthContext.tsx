import { createContext, useContext, useState } from "react";

// React Context Hook Pattern

interface ContextType {
  isLoggedIn: boolean;
  // toggleLoggedIn: Dispatch<SetStateAction<boolean>>;
  toggle: () => void;
  logIn: () => void;
  logOut: () => void;
}

export const AuthContext = createContext<ContextType | null>(null);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context) {
    return context;
  }
  throw new Error("Oh no! Component should be placed inside AuthProvider");
};

const useAuth = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);

  const toggle = () => setLoggedIn((value) => !value);
  const logIn = () => setLoggedIn(true);
  const logOut = () => setLoggedIn(false);

  return { isLoggedIn, toggle, logIn, logOut };
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthContext.Provider value={useAuth()}>{children}</AuthContext.Provider>
  );
};
