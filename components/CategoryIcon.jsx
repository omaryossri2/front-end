import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CategoryIcon = ({ item }) => {
  const { navigate } = useNavigation();

  return (
    <Pressable
      onPress={() => {
        navigate("Category", { item });
      }}
      style={styles.category}
    >
      <Text style={styles.txt}>{item.name}</Text>
    </Pressable>
  );
};

export default CategoryIcon;

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
