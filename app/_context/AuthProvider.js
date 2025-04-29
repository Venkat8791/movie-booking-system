"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../_lib/user-data-service";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    userId: null,
    isAuthenticated: false,
    firstName: null,
    email: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const userData = await getCurrentUser();
        setAuth({
          userId: userData.userId,
          isAuthenticated: true,
          firstName: userData.firstName,
          email: userData.email,
        });
      } catch (error) {
        setAuth({
          userId: null,
          isAuthenticated: false,
          firstName: null,
          email: null,
        });
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, loading }}>
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
