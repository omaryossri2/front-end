import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import Course from "../../components/Course";

const SeeAllCourses = () => {
  const route = useRoute();
  const { params } = route;

  // console.log(params);
  return (
    <View>
      <FlatList
        data={params}
        renderItem={(item) => <Course item={item.item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default SeeAllCourses;

const styles = StyleSheet.create({});
