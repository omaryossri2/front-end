import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const CourseDetails = () => {
  const route = useRoute();
  const {
    params: { item },
  } = route;

  console.log(item);

  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
};

export default CourseDetails;

const styles = StyleSheet.create({});
