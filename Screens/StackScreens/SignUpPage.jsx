import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

const SignUpPage = () => {
  const { navigate } = useNavigation();
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
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
        <View style={styles.imgContainer}>
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
                onPress={PickImage}
              />
            </View>
          )}
        </View>

        <View style={styles.txtContainer}>
          <Text>Name</Text>
          <TextInput style={styles.textInput} placeholder="Name" />
        </View>
        <View style={styles.txtContainer}>
          <Text>Email</Text>
          <TextInput style={styles.textInput} placeholder="Email" />
        </View>
        <View style={styles.txtContainer}>
          <Text>Password</Text>
          <TextInput style={styles.textInput} placeholder="Password" />
        </View>

        <View style={styles.areaAddress}>
          <View style={[styles.txtContainer, styles.fifty]}>
            <Text>Area</Text>
            <TextInput style={styles.textInput} placeholder="Area" />
          </View>
          <View style={[styles.txtContainer, styles.fifty]}>
            <Text>Address</Text>
            <TextInput style={styles.textInput} placeholder="Address" />
          </View>
        </View>

        <View style={styles.txtContainer}>
          <Text>Mobile Number</Text>
          <TextInput style={styles.textInput} placeholder="Mobile Number" />
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
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
