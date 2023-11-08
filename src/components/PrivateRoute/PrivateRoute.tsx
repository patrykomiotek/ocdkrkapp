import { Navigate } from "react-router-dom";
import { useAuthContext } from "../AuthContext/AuthContext";

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuthContext();
  if (auth.isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" />;
};
