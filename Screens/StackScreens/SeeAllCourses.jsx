import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Courses from "../../components/Courses";
import MyCourses from "../MyCourses";

const SeeAllCourses = () => {
  return (
    <View style={styles.container}>
      {/* <Courses seeAll={true} /> */}
      <MyCourses isCart={true} seeAll={true} />
    </View>
  );
};

export default SeeAllCourses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 25,
    // marginTop: 40,
  },
});
