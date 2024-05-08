import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Course = ({ item }) => {
  // console.log(item);

  const { navigate } = useNavigation();

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
        <Pressable
          onPress={() => {
            navigate("Course Details", { item });
          }}
        >
          <Image source={require("../assets/OIP.jpg")} style={styles.img} />
        </Pressable>
      </View>
      <Text style={styles.courseName}>{item.title}</Text>
      <Text style={styles.coursePrice}>${item.price}</Text>
    </View>
  );
};

export default Course;

const styles = StyleSheet.create({
  course: {
    height: 200,
    // paddingHorizontal: 20,

    paddingVertical: 15,

    marginBottom: 20,
    paddingRight: 20,
    // justifyContent: "center",
    alignItems: "center",
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
