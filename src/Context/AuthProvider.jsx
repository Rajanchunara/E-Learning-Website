import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getUser = async () => {
    try {
      let res = await fetch("http://localhost:9000/api/user/getUser", {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      setUser(data.userInfo || null);
    } catch (error) {
      setUser(null);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthContext.Provider value={{ getUser, user, setUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
