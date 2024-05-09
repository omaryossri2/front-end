import { NavigationContainer } from "@react-navigation/native";
import TabGroup from "./Tabs/TabGroup";
import { useContext, useState } from "react";
import StackGroup from "./Stack/StackGroup";
import HomeStackGroup from "./Stack/HomeStackGroup";
import { AuthContext } from "../context/AuthContext";
import { ActivityIndicator, View } from "react-native";

export default Navigation = () => {
  // const [user, setUser] = useState(1);

  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={"large"} />
    </View>;
  }

  return (
    <NavigationContainer>
      {!user ? <StackGroup /> : <HomeStackGroup />}
    </NavigationContainer>
  );
};
