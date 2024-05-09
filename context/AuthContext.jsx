import React, { createContext, useState } from "react";
import { Alert } from "react-native";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const res = await fetch("http://192.168.1.10:3001/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      console.log(data);

      setUser(data.user);
      Alert.alert("Success", "User registered successfully!");
    } else {
      Alert.alert("Error", "Failed to Sign in");
    }
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{ login, logout, isLoading, user }}>
      {children}
    </AuthContext.Provider>
  );
};
