import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SeeAllCategories = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.categories}>
        <Pressable
          onPress={() => {
            navigate("Category");
          }}
          style={styles.category}
        >
          <Text>C</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigate("Category");
          }}
          style={styles.category}
        >
          <Text>C</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigate("Category");
          }}
          style={styles.category}
        >
          <Text>C</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigate("Category");
          }}
          style={styles.category}
        >
          <Text>C</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigate("Category");
          }}
          style={styles.category}
        >
          <Text>C</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigate("Category");
          }}
          style={styles.category}
        >
          <Text>C</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigate("Category");
          }}
          style={styles.category}
        >
          <Text>C</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigate("Category");
          }}
          style={styles.category}
        >
          <Text>C</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigate("Category");
          }}
          style={styles.category}
        >
          <Text>C</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigate("Category");
          }}
          style={styles.category}
        >
          <Text>C</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SeeAllCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    marginTop: 40,
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 30,
    columnGap: 10,
  },
  category: {
    backgroundColor: "#c2c3c5",
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
