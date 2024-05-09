import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Category from "./Category";
import { API_URL } from "@env";

const Categories = () => {
  const [category, setCategory] = useState();

  // const categories = [
  //   {
  //     id: 1,
  //     name: "category 1",
  //   },
  //   {
  //     id: 2,
  //     name: "category 2",
  //   },
  //   {
  //     id: 3,
  //     name: "category 3",
  //   },
  //   {
  //     id: 4,
  //     name: "category 4",
  //   },
  //   {
  //     id: 5,
  //     name: "category 5",
  //   },
  // ];

  const getCategories = async () => {
    const res = await fetch(`${API_URL}/api/categories`);
    const data = await res.json();
    setCategory(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    category && (
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.header}>Categories</Text>
        </View>
        <View style={styles.categories}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={category}
            renderItem={(item) => <Category item={item.item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    )
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
