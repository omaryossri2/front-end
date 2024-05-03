import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MyCourse = ({ isCart, item }) => {
  // console.log(item);
  const { navigate } = useNavigation();
  return (
    <Pressable
      style={styles.myCourse}
      onPress={() => {
        navigate("Course Details", { item });
      }}
    >
      <View style={styles.imgContainer}>
        <Image source={require("../assets/OIP.jpg")} style={styles.img} />
      </View>
      <View style={styles.details}>
        <View style={styles.cart}>
          <View style={styles.categoryContainer}>
            <Text style={styles.category}>Design</Text>
          </View>
          {isCart && (
            <View style={styles.cartContainer}>
              <Ionicons name="cart" size={24} color="black" />
            </View>
          )}
        </View>
        <Text style={styles.title}>{item.title}</Text>
        {isCart && <Text style={styles.price}>$180.00</Text>}
      </View>
    </Pressable>
  );
};

export default MyCourse;

const styles = StyleSheet.create({
  myCourse: {
    width: "100%",
    // backgroundColor: "gray",
    height: 150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    flexDirection: "row",
    gap: 15,
    marginBottom: 20,
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
    marginTop: 20,
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
