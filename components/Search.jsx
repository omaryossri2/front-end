import { Pressable, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Search = ({ editable }) => {
  const [search, setSearch] = useState("");
  const { navigate } = useNavigation();

  return (
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
        editable={editable}
        autoFocus={editable}
      />
    </Pressable>
  );
};

export default Search;

const styles = StyleSheet.create({
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
