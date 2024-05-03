import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Courses from "../components/Courses";
import MyCourses from "./MyCourses";

const Cart = () => {
  const array = [
    { id: 1, categoryName: "Web Development" },
    { id: 2, categoryName: "Mobile Development" },
    { id: 3, categoryName: "Data Science" },
    { id: 4, categoryName: "Machine Learning" },
    { id: 5, categoryName: "UI/UX Design" },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.categories}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={array}
          renderItem={(item) => (
            <View style={styles.category}>
              <Text>{item.item.categoryName}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      {/* <Courses isCart={true} /> */}
      <MyCourses isCart={true} />
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 25,
  },
  categories: {
    flexDirection: "row",
    // marginBottom: 20,
    paddingHorizontal: 25,
  },
  category: {
    // backgroundColor: "gray",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#DDD",
    marginRight: 10,
  },
});
