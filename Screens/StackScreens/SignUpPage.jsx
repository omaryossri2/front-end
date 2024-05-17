import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { API_URL } from "@env";

const SignUpPage = () => {
  const { navigate } = useNavigation();

  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSignUp = async () => {
    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          profilePicture: "null",
          name: name,
          email: email,
          password: password,
          address: address,
          role: "student",
          balance: 200,
          area: area,
          mobile: mobile,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setImage("");
        setName("");
        setEmail("");
        setPassword("");
        setAddress("");
        setArea("");
        setMobile("");
        Alert.alert("Success", "User registered successfully!", [
          {
            text: "OK",
            onPress: () => navigate("Login"), // Navigate to Login screen
          },
        ]);
      } else {
        console.error("Failed to Register");
        Alert.alert("Error", "Failed to register user");
      }
    } catch (error) {
      console.error("Failed to register user:", error);
      Alert.alert("Error", "Failed to register user");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.txt}>
          Fill your information below or register with your social account
        </Text>
      </View>
      <View style={styles.inputsContainer}>
        {/* <View style={styles.imgContainer}>
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: "100%", height: "100%", borderRadius: 37.5 }}
            />
          ) : (
            <View style={styles.imgContainer}>
              <Ionicons name="person-outline" size={35} color="black" />
              <Ionicons
                style={styles.camera}
                name="camera-outline"
                size={24}
                color="black"
              />
            </View>
          )}
        </View> */}

        <View style={styles.txtContainer}>
          <Text>Name</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setName}
            placeholder="Name"
          />
        </View>
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

        <View style={styles.areaAddress}>
          <View style={[styles.txtContainer, styles.fifty]}>
            <Text>Area</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Area"
              onChangeText={setArea}
            />
          </View>
          <View style={[styles.txtContainer, styles.fifty]}>
            <Text>Address</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Address"
              onChangeText={setAddress}
            />
          </View>
        </View>

        <View style={styles.txtContainer}>
          <Text>Mobile Number</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Mobile Number"
            onChangeText={setMobile}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 30,
    gap: 15,
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
    gap: 10,
    // width: "100%",
    // width: "auto",
    // backgroundColor: "black",
  },
  fifty: {
    width: "50%",
  },
  areaAddress: {
    flexDirection: "row",
    // width: "100%",
    // marginHorizontal: "auto",
    justifyContent: "space-between",
    // width: "50%",
    gap: 5,
    // backgroundColor: "blue",
  },
  addressArea: {
    width: "50%",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  passwordHint: {
    fontSize: 12,
    color: "#999", // Faint color for the hint
    marginBottom: 20,
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
  alreadyHave: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
  },
  signIn: {
    color: "#0961f5",
    textDecorationLine: "underline",
  },
  imgContainer: {
    width: 75,
    height: 75,
    backgroundColor: "gray",
    alignSelf: "center",
    borderRadius: 37.5,
    // borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  camera: {
    position: "absolute",
    bottom: -5,
    right: 0,
  },
});

export default SignUpPage;
