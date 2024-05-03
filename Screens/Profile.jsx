import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.userName}>UserName</Text>
      <View style={styles.itemContainer}>
        <Pressable
          onPress={() => {
            navigate("edit profile");
          }}
          style={styles.item}
        >
          <View style={styles.edit}>
            <Ionicons name="person-outline" size={24} color="black" />
            <Text style={styles.txt}>Edit Profile</Text>
          </View>
          <Ionicons name="arrow-forward" size={24} color="#0961f5" />
        </Pressable>
        <Pressable
          onPress={() => {
            navigate("settings");
          }}
          style={styles.item}
        >
          <View style={styles.edit}>
            <Ionicons name="settings-outline" size={24} color="black" />
            <Text style={styles.txt}>Settings</Text>
          </View>
          <Ionicons name="arrow-forward" size={24} color="#0961f5" />
        </Pressable>
        <Pressable style={styles.item}>
          <View style={styles.edit}>
            <AntDesign name="logout" size={24} color="black" />
            <Text style={styles.txt}>Logout</Text>
          </View>
          <Ionicons name="arrow-forward" size={24} color="#0961f5" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 100,
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
