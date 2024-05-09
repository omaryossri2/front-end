import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { navigate } = useNavigation();
  const { logout, user } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.imgContainer}>
          <Ionicons name="person-outline" size={100} color="black" />
        </View>
        <Text style={styles.userName}>{user.name}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Pressable
          onPress={() => {
            navigate("edit profile", { user });
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
          style={styles.item}
          onPress={() => {
            navigate("settings");
          }}
        >
          <View style={styles.edit}>
            <Ionicons name="settings-outline" size={24} color="black" />
            <Text style={styles.txt}>Settings</Text>
          </View>
          <Ionicons name="arrow-forward" size={24} color="#0961f5" />
        </Pressable>
        <Pressable
          style={styles.item}
          onPress={() => {
            logout();
          }}
        >
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
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 70,
  },
  edit: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  txt: {
    fontSize: 18,
  },
  profile: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 50,
    gap: 10,
  },
  imgContainer: {
    width: 140,
    height: 140,
    // backgroundColor: "gray",
    alignSelf: "center",
    borderRadius: 70,
    // borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
});
