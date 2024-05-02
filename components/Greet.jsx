import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Search from "./Search";

const Greet = () => {
  return (
    <View style={styles.greeting}>
      <Text style={[styles.clr, styles.userGreet]}>Hi, John</Text>
      <Text style={[styles.clr, styles.txt]}>Let's start learning!</Text>
      <Search />
    </View>
  );
};

export default Greet;

const styles = StyleSheet.create({
  greeting: {
    width: "100%",
    backgroundColor: "#0961f5",
    height: 240,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    paddingLeft: 30,
    paddingTop: 70,
  },
  clr: {
    color: "white",
  },
  userGreet: {
    fontSize: 30,
    fontWeight: "bold",
  },
  txt: {
    marginTop: 5,
    fontSize: 12,
    letterSpacing: 2,
  },
});
