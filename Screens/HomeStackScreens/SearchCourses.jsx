import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";
import SearchedCourse from "../../components/SearchedCourse";

const SearchCourses = () => {
  const [searchItem, setSearchItem] = useState("");

  const array = [
    { id: 1, title: "Course 1", price: 19.99 },
    { id: 2, title: "Course 2", price: 24.99 },
    { id: 3, title: "Course 3", price: 29.99 },
    { id: 4, title: "Course 4", price: 14.99 },
    { id: 5, title: "Course 5", price: 39.99 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textinput}>
        <View style={styles.search}>
          <Ionicons name="search-outline" size={24} color="black" />
          <TextInput
            placeholder="Search..."
            autoFocus={true}
            onChangeText={setSearchItem}
          />
        </View>
      </View>

      <FlatList
        data={array}
        renderItem={(item) => <SearchedCourse item={item.item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default SearchCourses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textinput: {
    backgroundColor: "#0961f5",
    width: "100%",
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
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
