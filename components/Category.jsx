import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Category = ({ item }) => {
  return (
    <View style={styles.category}>
      <Text>{item.name}</Text>
    </View>
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
});
