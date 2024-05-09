import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { API_URL } from "@env";

const CourseDetails = () => {
  const route = useRoute();

  const { navigate } = useNavigation();
  const {
    params: { item, purchased, user },
  } = route;

  // console.log(user.id);
  // console.log(item.id);

  const enrollCourse = async () => {
    const res = await fetch(`${API_URL}/course/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user.id,
        courseId: item.id,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      Alert.alert("Success", data.message, [
        {
          text: "OK",
          onPress: () => navigate("Congratulations"), // Navigate to Login screen
        },
      ]);
    } else {
      Alert.alert("Failed", "Record already exists");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={{ uri: item.imagepath }} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>{item.category}</Text>
        </View>
        <Text style={styles.title}>{item.coursename}</Text>
        <View style={styles.ViewBorder}></View>
        <View style={styles.CourseDesc}>
          <Text style={styles.aboutTxt}>About Course</Text>
          <Text style={styles.desc}>{item.description}</Text>
        </View>
      </View>

      {!purchased && (
        <View style={styles.enroll}>
          <View style={styles.price}>
            <Text style={styles.totalPrice}>Total Price</Text>
            <Text style={styles.pricetxt}>${item.price}</Text>
          </View>
          <TouchableOpacity style={styles.btn} onPress={enrollCourse}>
            <Text style={styles.btnTxt}>Enroll Now</Text>
          </TouchableOpacity>
        </View>
      )}
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
    // width: "auto",
    marginRight: "auto",
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
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
