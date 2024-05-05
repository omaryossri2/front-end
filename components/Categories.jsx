import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import CategoryIcon from "./CategoryIcon";

const Categories = () => {
  const { navigate } = useNavigation();

  let categories = [
    { id: 1, name: "Technology" },
    { id: 2, name: "Mathematics" },
    { id: 3, name: "Science" },
    { id: 4, name: "Languages" },
    { id: 5, name: "Arts" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.header}>Categories</Text>
        {/* <Text
          style={styles.see}
          onPress={() => {
            navigate("See All categories");
          }}
        >
          See all
        </Text> */}
      </View>
      <View style={styles.categories}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={(item) => <CategoryIcon item={item.item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    // paddingRight: 30,
    gap: 20,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  see: {
    color: "#ffad10",
    fontSize: 15,
  },
  categories: {
    flexDirection: "row",
    gap: 15,
  },
});
