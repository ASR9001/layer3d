import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check cookie on page reload
  useEffect(() => {
    const userData = Cookies.get("layerx_user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const login = (data) => {
    setUser(data);

    // Save user in cookies (7 days)
    Cookies.set("layerx_user", JSON.stringify(data), {
      expires: 7,
      secure: true,
      sameSite: "lax",
    });
  };

  const logout = () => {
    setUser(null);
    Cookies.remove("layerx_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
