import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import MyCourse from "../components/MyCourse";
import { AuthContext } from "../context/AuthContext";
import { API_URL } from "@env";

const MyCourses = () => {
  const { user } = useContext(AuthContext);
  const [allMyCourses, setAllMyCourses] = useState();

  const array = [
    { id: 1, title: "Course 1", price: 19.99 },
    { id: 2, title: "Course 2", price: 24.99 },
    { id: 3, title: "Course 3", price: 29.99 },
    { id: 4, title: "Course 4", price: 14.99 },
    { id: 5, title: "Course 5", price: 39.99 },
  ];

  const route = useRoute();
  // console.log(route.name);

  const purchased = route.name === "My Courses" ? true : false;

  const getMyCourses = async () => {
    const res = await fetch(`${API_URL}/Mycourse/${user.id}`);
    const data = await res.json();
    setAllMyCourses(data);
  };

  useEffect(() => {
    getMyCourses();
  }, [allMyCourses]);

  return (
    allMyCourses && (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={allMyCourses}
          renderItem={(item) => (
            <MyCourse item={item.item} purchased={purchased} />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    )
  );
};

export default MyCourses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  myCourse: {
    width: "90%",
    // backgroundColor: "gray",
    height: 180,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    flexDirection: "row",
    gap: 15,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  imgContainer: {
    width: "35%",
    height: "100%",
    // backgroundColor: "blue",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  details: {
    width: 200,
    marginTop: 20,
  },
  categoryContainer: {
    backgroundColor: "#fff7e6",
    // width: 70,
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
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 16,
  },
  price: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 20,
  },
  cart: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cartContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 5,
    borderRadius: 8,
  },
});
