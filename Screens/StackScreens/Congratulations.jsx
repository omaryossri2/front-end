import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Congratulations = () => {
  const { navigate } = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("My Courses");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cong}>
        <Ionicons name="checkmark-sharp" size={90} color="white" />
      </View>
      <View style={styles.txt}>
        <Text style={styles.congtxt}>Congratulations</Text>
        <Text style={styles.ss}>
          You have successfully made payment and enrolled the course
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Congratulations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  cong: {
    backgroundColor: "#0961f5",
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  txt: {
    width: "80%",
    textAlign: "center",
    marginHorizontal: "auto",
    alignItems: "center",
    gap: 10,
  },
  congtxt: {
    fontWeight: "bold",
    fontSize: 20,
  },
  ss: {
    textAlign: "center",
    color: "#ccc",
  },
});
