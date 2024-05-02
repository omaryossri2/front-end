import { StyleSheet, View } from "react-native";
import React from "react";
import Greet from "../components/Greet";
import Categories from "../components/Categories";
import Courses from "../components/Courses";

const Home = () => {
  return (
    <View style={styles.container}>
      <Greet />
      <Categories />
      <Courses />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
  },
});
