import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Course = ({ item }) => {
  // console.log(item);
  return (
    <View style={styles.course}>
      {/* Image and image container */}
      <View style={styles.imgContainer}>
        {/* Add TO Cart Icon */}

        <View style={styles.toCart}>
          <Ionicons
            name="cart-outline"
            size={24}
            color="black"
            style={styles.icon}
          />
        </View>
        <Image source={require("../assets/OIP.jpg")} style={styles.img} />
      </View>
      <Text style={styles.courseName}>{item.title}</Text>
      <Text style={styles.coursePrice}>$180.00</Text>
    </View>
  );
};

export default Course;

const styles = StyleSheet.create({
  course: {
    height: 200,
    paddingRight: 20,
  },
  imgContainer: {
    height: 150,
    width: 250,
  },
  courseName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  coursePrice: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#2875f6",
    marginTop: 2,
  },
  toCart: {
    position: "absolute",
    backgroundColor: "#eee",
    height: 35,
    width: 32,
    zIndex: 10,
    borderRadius: 10,
    right: 20,
    top: 15,
    justifyContent: "center",
    alignContent: "center",
  },
  icon: {
    alignSelf: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 20,
  },
});
