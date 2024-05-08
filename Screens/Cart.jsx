import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MyCart from "../components/MyCart";

const Cart = () => {
  const array = [
    { id: 1, title: "Course 1", price: 19.99 },
    { id: 2, title: "Course 2", price: 24.99 },
    { id: 3, title: "Course 3", price: 29.99 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={array}
        renderItem={(item) => <MyCart item={item.item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
