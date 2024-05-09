import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Category = ({ item }) => {
  const { navigate } = useNavigation();
  // console.log(item);
  return (
    <Pressable
      style={styles.category}
      onPress={() => {
        navigate("CategoryCourses", { item });
      }}
    >
      <Text style={styles.txt}>{item.category}</Text>
    </Pressable>
  );
};

export default Category;

const styles = StyleSheet.create({
  category: {
    backgroundColor: "#c2c3c5",
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  txt: {
    fontWeight: "bold",
    fontSize: 10,
  },
});
