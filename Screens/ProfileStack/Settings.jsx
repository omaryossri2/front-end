import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AuthContext } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const Settings = () => {
  const { navigate } = useNavigation();
  const { deleteAccount } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Pressable
          style={styles.item}
          onPress={() => {
            navigate("Change Password");
          }}
        >
          <View style={styles.edit}>
            <Ionicons name="key" size={24} color="black" />
            <Text style={styles.txt}>Password Manager</Text>
          </View>
          <Ionicons name="arrow-forward" size={24} color="#0961f5" />
        </Pressable>
        <Pressable style={styles.item} onPress={deleteAccount}>
          <View style={styles.edit}>
            <MaterialCommunityIcons name="delete" size={24} color="black" />
            <Text style={styles.txt}>Delete Account</Text>
          </View>
          <Ionicons name="arrow-forward" size={24} color="#0961f5" />
        </Pressable>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    marginTop: 50,
  },
  itemContainer: {
    gap: 30,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
  },
  edit: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  txt: {
    fontSize: 18,
  },
});
