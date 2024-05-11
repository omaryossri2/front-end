import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebaseConfig";
import { API_URL } from "@env";
import { useNavigation } from "@react-navigation/native";

const AddCourse = () => {
  const { navigate } = useNavigation();
  const [image, setImage] = useState();
  const [ImageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);

      // upload image to firebase and get url
      await uploadImage(result.assets[0].uri);
    }
  };

  const uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    const storageRef = ref(storage, "uploads/courses/" + new Date().getTime());
    const uploadTask = uploadBytesResumable(storageRef, blob);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Progress" + progress + "% done");
      },
      (error) => {
        // error handling
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("file availabe at" + downloadURL);
          setImageUrl(downloadURL);
        });
      }
    );
  };

  const uploadCourse = async () => {
    const res = await fetch(`${API_URL}/api/addCourse `, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        coursename: name,
        courseImage: ImageUrl,
        description: description,
        price: price,
        category: category,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      console.log(data);
      setImage("");
      setImageUrl("");
      setName("");
      setDescription("");
      setPrice("");
      setCategory("");
      Alert.alert("Success", data.message, [
        {
          text: "OK",
          onPress: () => navigate("Courses"), // Navigate to Login screen
        },
      ]);
    } else {
      Alert.alert("Error", "Failed to add course");
    }
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.pick} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.img} />
        ) : (
          <Text>Add Course Image</Text>
        )}
      </Pressable>
      <View style={styles.inputsContainer}>
        <View style={styles.input}>
          <Text>Course Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Course Name"
            onChangeText={setName}
          />
        </View>
        <View style={styles.input}>
          <Text>Course Description</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Course Description"
            onChangeText={setDescription}
          />
        </View>
        <View style={styles.input}>
          <Text>Course Category</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Course Category"
            onChangeText={setCategory}
          />
        </View>
        <View style={styles.input}>
          <Text>Course price</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Course price"
            onChangeText={setPrice}
          />
        </View>
      </View>
      <Pressable style={styles.btn} onPress={uploadCourse}>
        <Text style={styles.btntxt}>Add Course</Text>
      </Pressable>
    </View>
  );
};

export default AddCourse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pick: {
    width: "90%",
    height: 200,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 20,
    marginVertical: 20,
  },
  img: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  inputsContainer: {
    gap: 25,
    marginHorizontal: 20,
  },
  input: {
    gap: 5,
  },
  textInput: {
    backgroundColor: "#c2c3c5",
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
    marginHorizontal: 20,
    marginVertical: 25,
  },
  btntxt: {
    color: "white",
    fontSize: 16,
  },
});
