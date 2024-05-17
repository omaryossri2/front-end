// components/LoginPage.js

import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../../context/AuthContext";

const LoginPage = () => {
  const { navigate } = useNavigation();

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.txt}>Hi welcome back, you've been missed</Text>
      </View>

      <View style={styles.inputsContainer}>
        <View style={styles.txtContainer}>
          <Text>Email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.txtContainer}>
          <Text>Password</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          login(email, password);
        }}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.DontHave}>
        <Text>Don't have an account</Text>
        <Text
          onPress={() => {
            navigate("Sign Up");
          }}
          style={styles.signUp}
        >
          Sign In
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 25,
    gap: 20,
  },
  header: {
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    color: "#ccc",
    textAlign: "center",
    width: "80%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },

  inputsContainer: {
    gap: 20,
    paddingTop: 20,
    // width: "100%",
    // width: "auto",
    // backgroundColor: "black",
  },
  txtContainer: {
    gap: 5,
  },
  textInput: {
    backgroundColor: "#c2c3c5",
    // backgroundColor: "blue",

    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    // width: "100%",
  },
  button: {
    backgroundColor: "#007bff",
    marginTop: 20,
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
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  DontHave: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
  },
  signUp: {
    color: "#0961f5",
    textDecorationLine: "underline",
  },
});

export default LoginPage;
