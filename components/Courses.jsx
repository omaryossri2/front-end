import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Course from "./Course";
import { useNavigation } from "@react-navigation/native";

const Courses = () => {
  const array = [
    { id: 1, title: "Course 1", price: 19.99 },
    { id: 2, title: "Course 2", price: 24.99 },
    { id: 3, title: "Course 3", price: 29.99 },
    { id: 4, title: "Course 4", price: 14.99 },
    { id: 5, title: "Course 5", price: 39.99 },
    { id: 6, title: "Course 6", price: 39.99 },
    { id: 7, title: "Course 7", price: 39.99 },
    { id: 8, title: "Course 8", price: 39.99 },
    { id: 9, title: "Course 9", price: 39.99 },
  ];

  const newArray = array.slice(0, 5);

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>Courses</Text>
        <Text
          style={styles.see}
          onPress={() => {
            navigate("See All courses", array);
          }}
        >
          See all
        </Text>
      </View>
      <View style={styles.courses}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={newArray}
          renderItem={(item) => <Course item={item.item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Courses;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    gap: 20,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  courses: {
    flex: 1,
  },
  see: {
    color: "#ffad10",
    fontSize: 15,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
