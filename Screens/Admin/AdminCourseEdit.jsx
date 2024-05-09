import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";

const AdminCourseEdit = () => {
  const route = useRoute();
  const {
    params: { item },
  } = route;

  const [CourseName, setCourseName] = useState(item.coursename);
  const [CourseDesc, setCourseDesc] = useState(item.description);
  const [CoursePrice, setCoursePrice] = useState(item.price);

  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <View style={styles.edit}>
          <Text>Course Name</Text>
          <TextInput
            onChangeText={setCourseName}
            value={CourseName}
            style={styles.textInput}
          />
        </View>
        <View style={styles.edit}>
          <Text>Course Price</Text>
          <TextInput
            value={CoursePrice}
            onChangeText={setCoursePrice}
            style={styles.textInput}
          />
        </View>
        <View style={styles.edit}>
          <Text>Course Description</Text>
          <TextInput
            multiline
            value={CourseDesc}
            onChangeText={setCourseDesc}
            style={styles.textInput}
            numberOfLines={8}
          />
        </View>
      </View>
      <Pressable style={styles.btn}>
        <Text style={styles.btntxt}>Update Course</Text>
      </Pressable>
    </View>
  );
};

export default AdminCourseEdit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 50,
    justifyContent: "space-between",
    marginBottom: 40,
  },
  inputsContainer: {
    gap: 25,
  },
  edit: {
    gap: 5,
  },
  textInput: {
    backgroundColor: "#c2c3c5",
    // backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  btn: {
    backgroundColor: "#0961f5",
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  btntxt: {
    color: "white",
    fontSize: 16,
  },
});
