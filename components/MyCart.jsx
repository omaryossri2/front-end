import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../context/AuthContext";
import { API_URL } from "@env";

const MyCart = ({ item }) => {
  const { user } = useContext(AuthContext);
  const { navigate } = useNavigation();

  const removeFromCart = async () => {
    const res = await fetch(`${API_URL}/cart/delete/${user.id}/${item.id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      const data = await res.json();
      Alert.alert("Success", data.message);
    } else {
      Alert.alert("Success", data.message);
    }
  };

  return (
    <Pressable style={styles.myCourse}>
      <Pressable
        style={styles.imgContainer}
        onPress={() => {
          navigate("Course Details", { item, user });
        }}
      >
        <Image style={styles.img} source={{ uri: item.imagepath }} />
      </Pressable>
      <View style={styles.details}>
        <View style={styles.cart}>
          <View style={styles.categoryContainer}>
            <Text style={styles.category}>{item.category}</Text>
          </View>

          <View style={styles.cartContainer}>
            <Ionicons
              name="cart"
              size={24}
              color="black"
              onPress={removeFromCart}
            />
          </View>
        </View>
        <Text style={styles.title}>{item.coursename}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </Pressable>
  );
};

export default MyCart;

const styles = StyleSheet.create({
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
