import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.header}>Categories</Text>
        <Text
          style={styles.see}
          onPress={() => {
            navigate("See All categories");
          }}
        >
          See all
        </Text>
      </View>
      <View style={styles.categories}>
        <View style={styles.category}>
          <Text>C</Text>
        </View>
        <View style={styles.category}>
          <Text>C</Text>
        </View>
        <View style={styles.category}>
          <Text>C</Text>
        </View>
        <View style={styles.category}>
          <Text>C</Text>
        </View>
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
  category: {
    backgroundColor: "#c2c3c5",
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
