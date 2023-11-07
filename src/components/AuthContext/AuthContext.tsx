import { createContext } from "react";

interface ContextType {
  isLoggedIn: boolean;
}

export const AuthContext = createContext<ContextType>({
  isLoggedIn: false,
});
