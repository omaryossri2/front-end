import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const CourseDetails = () => {
  const route = useRoute();
  const {
    params: { item },
  } = route;

  // console.log(item);

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={require("../../assets/OIP.jpg")} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Desgin</Text>
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.ViewBorder}></View>
        <View style={styles.CourseDesc}>
          <Text style={styles.aboutTxt}>About Course</Text>
          <Text style={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit commodi ratione eaque rerum facere quis blanditiis
            tempore eum quibusdam iusto, fuga atque accusantium cum dolores quos
            voluptates sequi alias ipsam!
          </Text>
        </View>
      </View>
      <View style={styles.enroll}>
        <View style={styles.price}>
          <Text style={styles.totalPrice}>Total Price</Text>
          <Text style={styles.pricetxt}>$180.00$</Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.btnTxt}>Enroll Now</Text>
        </View>
      </View>
    </View>
  );
};

export default CourseDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    width: "100%",
    height: 300,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  details: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  detailsContainer: {
    // position: "absolute",
    // top: 0,
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 30,
    gap: 20,
  },
  categoryContainer: {
    backgroundColor: "#fff7e6",
    width: 70,
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  category: {
    color: "#ffb21d",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  CourseDesc: {
    gap: 5,
  },
  aboutTxt: {
    fontSize: 15,
    fontWeight: "bold",
  },
  ViewBorder: {
    borderWidth: 1,
    borderColor: "#ddd",
  },
  desc: {
    color: "#ccc",
  },
  enroll: {
    paddingHorizontal: 25,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingVertical: 30,
  },
  totalPrice: {
    color: "#ddd",
  },
  price: {
    gap: 5,
  },
  pricetxt: {
    color: "#0961f5",
  },
  btn: {
    backgroundColor: "#0961f5",
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  btnTxt: {
    color: "white",
  },
});
