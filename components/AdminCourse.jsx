import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { API_URL } from "@env";

const AdminCourse = ({ item }) => {
  const { navigate } = useNavigation();

  const deleteCourse = async () => {
    // console.log(item);
    const res = await fetch(`${API_URL}/api/deleteCourse/${item.id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    if (res.ok) {
      Alert.alert("Success", data.message);
    } else {
      Alert.alert("Failed", data.message);
    }
  };

  

  return (
    <View style={styles.course}>
      <View style={styles.imgContainer}>
        <View style={styles.iconsContainer}>
          <Pressable
            style={styles.Edit}
            onPress={() => {
              navigate("Edit Course", { item });
            }}
          >
            <Feather name="edit" size={24} color="black" style={styles.icon} />
          </Pressable>
          <View style={styles.delete}>
            <MaterialIcons
              name="delete"
              size={24}
              color="black"
              style={styles.icon}
              onPress={deleteCourse}
            />
          </View>
        </View>
        <Pressable>
          <Image source={{ uri: item.imagepath }} style={styles.img} />
        </Pressable>
      </View>
      <Text style={styles.courseName}>{item.coursename}</Text>
      <Text style={styles.coursePrice}>${item.price}</Text>
    </View>
  );
};

export default AdminCourse;

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
  iconsContainer: {
    // flexDirection: "row",
    // backgroundColor: "white",
    zIndex: 100,
    // justifyContent: "space-between",
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
  Edit: {
    position: "absolute",
    backgroundColor: "#eee",
    height: 35,
    width: 32,
    zIndex: 10,
    borderRadius: 10,
    right: 20,
    top: 60,
    justifyContent: "center",
    alignContent: "center",
  },
  delete: {
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
