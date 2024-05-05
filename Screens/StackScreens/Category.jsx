import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Courses from "../../components/Courses";
import MyCourses from "../MyCourses";

const Category = ({ navigation }) => {
  const route = useRoute();

  const {
    params: { item },
  } = route;

  useEffect(() => {
    navigation.setOptions({ headerTitle: item.name });
  }, []);

  return (
    <View style={styles.container}>
      {/* <Courses seeAll={true} /> */}
      <MyCourses isCart={true} seeAll={true} />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
