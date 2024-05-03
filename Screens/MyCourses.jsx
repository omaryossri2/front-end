import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MyCourse from "../components/MyCourse";

const MyCourses = ({ isCart }) => {
  const array = [
    { id: 1, title: "Course 1", price: 19.99 },
    { id: 2, title: "Course 2", price: 24.99 },
    { id: 3, title: "Course 3", price: 29.99 },
    { id: 4, title: "Course 4", price: 14.99 },
    { id: 5, title: "Course 5", price: 39.99 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.myCourses}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={array}
          renderItem={(item) => <MyCourse item={item.item} isCart={isCart} />}
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
