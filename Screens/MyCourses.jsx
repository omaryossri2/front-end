import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MyCourse from "../components/MyCourse";
import { useRoute } from "@react-navigation/native";

const MyCourses = ({ isCart, seeAll }) => {
  const array = [
    { id: 1, title: "Web Development Bootcamp", price: 199.99 },
    { id: 2, title: "JavaScript Fundamentals", price: 49.99 },
    { id: 3, title: "Python for Data Science", price: 79.99 },
    { id: 4, title: "UX Design Principles", price: 59.99 },
    { id: 5, title: "Mobile App Development", price: 149.99 },
  ];

  const route = useRoute();
  const purchased = route.name === "My Courses" ? true : false;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.myCourses}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={array}
          renderItem={(item) => (
            <MyCourse
              item={item.item}
              isCart={isCart}
              seeAll={seeAll}
              purchased={purchased}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyCourses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
  },
  myCourses: {},
});
