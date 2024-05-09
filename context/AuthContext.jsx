import React, { createContext, useState } from "react";
import { Alert } from "react-native";
export const AuthContext = createContext();
import { API_URL } from "@env";

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const res = await fetch(`${API_URL}/api/auth/login`, {
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
      // console.log(data);

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

  const updateUser = async (name, email, area, address, mobile) => {
    const res = await fetch(`${API_URL}/api/edit/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        area: area,
        address: address,
        mobile: mobile,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      setUser(data.updatedUser);
      Alert.alert("Success", data.message);
    } else {
      Alert.alert("Failed", "Failed to edit user data");
    }
  };

  const changePassword = async (password) => {
    const res = await fetch(`${API_URL}/api/editPassword/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      setUser(data.updatedUser);
      Alert.alert("Success", data.message);
    } else {
      Alert.alert("Failed", "Failed to change password");
    }
  };

  const deleteAccount = async () => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete your account?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            const res = await fetch(`${API_URL}/api/delete/${user.id}`);
            if (res.ok) {
              const data = await res.json();
              Alert.alert("Success", data.message);
            } else {
              Alert.alert("Failed", "Failed to delete user");
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isLoading,
        user,
        updateUser,
        changePassword,
        deleteAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
