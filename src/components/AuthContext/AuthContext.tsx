import { Dispatch, SetStateAction, createContext, useState } from "react";

interface ContextType {
  isLoggedIn: boolean;
  toggleLoggedIn: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<ContextType>({
  isLoggedIn: false,
  toggleLoggedIn: () => null,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, toggleLoggedIn: setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
