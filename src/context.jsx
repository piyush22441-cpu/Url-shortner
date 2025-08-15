import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser, logout } from "./db/apiAuth";

const UrlContext = createContext();

const UrlProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = user?.role === "authenticated";

  const fetchUser = async () => {
    try {
      const { data, error } = await getCurrentUser();
      if (error) throw error;
      setUser(data?.user);
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  };

  const fnLogout = async () => {
    try {
      await logout();
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UrlContext.Provider
      value={{
        user,
        fetchUser,
        loading,
        isAuthenticated,
        fnLogout,
      }}
    >
      {children}
    </UrlContext.Provider>
  );
};

export const UrlState = () => {
  return useContext(UrlContext);
};

export default UrlProvider;