import { NavigationContainer } from "@react-navigation/native";
import TabGroup from "./Tabs/TabGroup";
import { useState } from "react";
import StackGroup from "./Stack/StackGroup";
import HomeStackGroup from "./Stack/HomeStackGroup";

export default Navigation = () => {
  const [user, setUser] = useState(1);
  return (
    <NavigationContainer>
      {!user ? <StackGroup /> : <HomeStackGroup />}
    </NavigationContainer>
  );
};
