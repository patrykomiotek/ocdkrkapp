import { Dispatch, SetStateAction, createContext } from "react";

interface ContextType {
  isLoggedIn: boolean;
  toggleLoggedIn: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<ContextType>({
  isLoggedIn: false,
  toggleLoggedIn: () => null,
});
