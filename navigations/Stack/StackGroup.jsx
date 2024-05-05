import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "../../Screens/StackScreens/LandingPage";
import SignUpPage from "../../Screens/StackScreens/SignUpPage";
import LoginPage from "../../Screens/StackScreens/LoginPage";

const stack = createStackNavigator();

const StackGroup = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <stack.Screen name="Landing" component={LandingPage} />
      <stack.Screen name="Sign Up" component={SignUpPage} />
      <stack.Screen name="Login" component={LoginPage} />
    </stack.Navigator>
  );
};

export default StackGroup;
