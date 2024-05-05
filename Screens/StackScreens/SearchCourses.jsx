import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "../../components/Search";
import Courses from "../../components/Courses";
import MyCourses from "../MyCourses";

const SearchCourses = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textinput}>
        <Search editable={true}  />
      </View>

      <MyCourses isCart={true} />
    </SafeAreaView>
  );
};

export default SearchCourses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textinput: {
    backgroundColor: "#0961f5",
    width: "100%",
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
});
