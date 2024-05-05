// components/LandingPage.js
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const LandingPage = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://drive.google.com/uc?export=download&id=1a0rrtvya7hfgWe2PNpOqaqhmPpiZv-4n",
        }}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to EduGate</Text>
      <Text style={styles.subtitle}>
        Unlock your potential through learning
      </Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigate("Sign Up");
          }}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.alreadyHave}>
          <Text>Already have an account</Text>
          <Text
            onPress={() => {
              navigate("Login");
            }}
            style={styles.signIn}
          >
            Sign In
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },
  alreadyHave: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
  },
  signIn: {
    color: "#0961f5",
    textDecorationLine: "underline",
  },
  btnContainer: {
    width: "100%",
    justifyContent: "center",
    // alignItems: "center",
    width: "80%",
    gap: 20,
  },
  button: {
    backgroundColor: "#007bff",
    marginTop: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginText: {
    fontSize: 16,
    marginBottom: 10,
  },
  loginLink: {
    color: "blue",
    fontSize: 14,
    textDecorationLine: "underline", // Add this line to underline the text
  },
});

export default LandingPage;
