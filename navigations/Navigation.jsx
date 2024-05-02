import { NavigationContainer } from "@react-navigation/native";
import TabGroup from "./Tabs/TabGroup";
import { useState } from "react";
import StackGroup from "./Stack/StackGroup";

export default Navigation = () => {
  const [user, setUser] = useState(1);
  return (
    <NavigationContainer>
      {!user ? <StackGroup /> : <TabGroup />}
    </NavigationContainer>
  );
};
