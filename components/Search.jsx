import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.search}>
      <Ionicons name="search-outline" size={24} color="black" />
      <TextInput placeholder="Search..." onChangeText={setSearch} />
    </View>
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
