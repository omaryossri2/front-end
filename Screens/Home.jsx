import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import Categories from "../components/Categories";
import Courses from "../components/Courses";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [search, setSearch] = useState("");
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.greeting}>
        <Text style={[styles.clr, styles.userGreet]}>Hi, John</Text>
        <Text style={[styles.clr, styles.txt]}>Let's start learning!</Text>
        <Pressable
          style={styles.search}
          onPress={() => {
            navigate("Search Courses");
          }}
        >
          <Ionicons name="search-outline" size={24} color="black" />
          <TextInput
            placeholder="Search..."
            onChangeText={setSearch}
            editable={false}
          />
        </Pressable>
      </View>
      <Categories />
      <Courses />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
  },
  greeting: {
    width: "100%",
    backgroundColor: "#0961f5",
    height: 240,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    paddingLeft: 30,
    paddingTop: 70,
  },
  clr: {
    color: "white",
  },
  userGreet: {
    fontSize: 30,
    fontWeight: "bold",
  },
  txt: {
    marginTop: 5,
    fontSize: 12,
    letterSpacing: 2,
  },
  search: {
    marginTop: 20,
    flexDirection: "row",
    gap: 8,
    backgroundColor: "white",
    width: 300,
    padding: 7,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: "center",
  },
});
