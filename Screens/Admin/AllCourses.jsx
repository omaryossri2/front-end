import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AdminCourse from "../../components/AdminCourse";
import { API_URL } from "@env";

const AllCourses = () => {
  const [allCourses, setAllCourses] = useState();

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

  const getAllCourses = async () => {
    const res = await fetch(`${API_URL}/api/courses`);
    const data = await res.json();
    setAllCourses(data);
  };

  useEffect(() => {
    getAllCourses();
  }, [allCourses]);

  return (
    allCourses && (
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={allCourses}
          renderItem={(item) => <AdminCourse item={item.item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    )
  );
};

export default AllCourses;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    gap: 20,
    flex: 1,
    paddingTop: 20,
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
