"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  PropsWithChildren,
  useMemo,
} from "react";
import { getCurrentUser } from "../_lib/user-data-service";

type AuthState = {
  userId: string | null;
  isAuthenticated: boolean;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phoneNumber: string | null;
};

type AuthContextType = {
  auth: AuthState;
  setAuth: React.Dispatch<React.SetStateAction<AuthState>>;
  loading: boolean;
};

const initialState: AuthState = {
  userId: null,
  isAuthenticated: false,
  firstName: null,
  lastName: null,
  email: null,
  phoneNumber: null,
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
  const [auth, setAuth] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const authContextValue = useMemo(
    () => ({ auth, setAuth, loading }),
    [auth, setAuth, loading]
  );

  useEffect(() => {
    (async () => {
      try {
        const userData = await getCurrentUser();
        setAuth({
          userId: userData.userId,
          isAuthenticated: true,
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          phoneNumber: userData.phoneNumber,
        });
      } catch (error: any) {
        if (error instanceof Error) {
          console.log(
            "error occured when setting auth context or user is not logged in"
          );
        }
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { useAuth, AuthProvider };
