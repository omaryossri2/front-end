import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MyCart from "../components/MyCart";
import { AuthContext } from "../context/AuthContext";
import { API_URL } from "@env";

const Cart = () => {
  const { user } = useContext(AuthContext);

  const [cartCourses, setCartCourses] = useState();

  const getMyCart = async () => {
    const res = await fetch(`${API_URL}/cart/${user.id}`);
    const data = await res.json();
    setCartCourses(data);
  };

  useEffect(() => {
    getMyCart();
  }, [cartCourses]);

  // const array = [
  //   { id: 1, title: "Course 1", price: 19.99 },
  //   { id: 2, title: "Course 2", price: 24.99 },
  //   { id: 3, title: "Course 3", price: 29.99 },
  // ];

  return (
    cartCourses && (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={cartCourses}
          renderItem={(item) => <MyCart item={item.item} />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    )
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
