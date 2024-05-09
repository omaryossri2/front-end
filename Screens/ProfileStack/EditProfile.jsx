import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";

const EditProfile = () => {
  const route = useRoute();

  const {
    params: { user },
  } = route;

  console.log(user);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [area, setArea] = useState(user.area);
  const [address, setAddress] = useState(user.address);
  const [mobile, setMobile] = useState(user.mobilenumber);

  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <View style={styles.edit}>
          <Text>Name</Text>
          <TextInput
            onChangeText={setName}
            value={name}
            style={styles.textInput}
          />
        </View>
        <View style={styles.edit}>
          <Text>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.textInput}
          />
        </View>

        <View style={styles.edit}>
          <Text>Area</Text>
          <TextInput
            value={area}
            onChangeText={setArea}
            style={styles.textInput}
          />
        </View>
        <View style={styles.edit}>
          <Text>Address</Text>
          <TextInput
            value={address}
            onChangeText={setAddress}
            style={styles.textInput}
          />
        </View>
        <View style={styles.edit}>
          <Text>Mobile</Text>
          <TextInput
            value={mobile}
            onChangeText={setMobile}
            style={styles.textInput}
          />
        </View>
      </View>
      <Pressable style={styles.btn}>
        <Text style={styles.btntxt}>Update Profile</Text>
      </Pressable>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 50,
    justifyContent: "space-between",
    marginBottom: 40,
  },
  inputsContainer: {
    gap: 25,
  },
  edit: {
    gap: 5,
  },
  textInput: {
    backgroundColor: "#c2c3c5",
    // backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  btn: {
    backgroundColor: "#0961f5",
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  btntxt: {
    color: "white",
    fontSize: 16,
  },
});
