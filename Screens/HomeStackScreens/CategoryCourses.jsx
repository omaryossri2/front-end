import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import CategoryCourse from "../../components/CategoryCourse";
import { API_URL } from "@env";

const CategoryCourses = ({ navigation }) => {
  // const { user } = useContext(AuthContext);
  // const { navigate } = useNavigation();
  const [Categorycourses, setCategoryCourses] = useState();
  const route = useRoute();
  const {
    params: { item },
  } = route;

  //
  const getCategoryCourses = async () => {
    const res = await fetch(`${API_URL}/api/courses?category=${item.category}`);
    const data = await res.json();
    setCategoryCourses(data);
  };

  useEffect(() => {
    navigation.setOptions({ headerTitle: item.category });
    getCategoryCourses();
  }, []);

  return (
    <View style={styles.container}>
      {Categorycourses && (
        <FlatList
          data={Categorycourses}
          renderItem={(item) => <CategoryCourse item={item.item} />}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default CategoryCourses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
