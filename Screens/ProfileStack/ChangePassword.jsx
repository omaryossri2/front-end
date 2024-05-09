import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const ChangePassword = () => {
  const { user, changePassword } = useContext(AuthContext);
  const [password, setPassword] = useState(user.password);
  return (
    <View style={styles.container}>
      <View style={styles.edit}>
        <Text>Password</Text>
        <TextInput
          onChangeText={setPassword}
          value={password}
          style={styles.textInput}
        />
      </View>
      <Pressable
        style={styles.btn}
        onPress={() => {
          changePassword(password);
        }}
      >
        <Text style={styles.btntxt}>Update Password</Text>
      </Pressable>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    gap: 40,
    paddingTop: 40,
    paddingHorizontal: 30,
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
