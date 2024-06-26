import CategoryCourses from "../../Screens/HomeStackScreens/CategoryCourses";
import Congratulations from "../../Screens/HomeStackScreens/Congratulations";
import CourseDetails from "../../Screens/HomeStackScreens/CourseDetails";
import CreditCard from "../../Screens/HomeStackScreens/CreditCard";
import SearchCourses from "../../Screens/HomeStackScreens/SearchCourses";
import SeeAllCourses from "../../Screens/HomeStackScreens/SeeAllCourses";
import ChangePassword from "../../Screens/ProfileStack/ChangePassword";
import EditProfile from "../../Screens/ProfileStack/EditProfile";
import Settings from "../../Screens/ProfileStack/Settings";
import TabGroup from "../Tabs/TabGroup";
const { createStackNavigator } = require("@react-navigation/stack");

const Stack = createStackNavigator();

const HomeStackGroup = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="TabGroup"
        component={TabGroup}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Course Details"
        component={CourseDetails}
      />
      <Stack.Screen
        name="CategoryCourses"
        component={CategoryCourses}
        options={{
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerTitle: "Courses",
          headerStyle: {
            height: 100,
          },
        }}
        name="See All courses"
        component={SeeAllCourses}
      />

      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerTitle: "Your Profile",
          headerStyle: {
            height: 100,
          },
        }}
        name="edit profile"
        component={EditProfile}
      />
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerTitle: "Settings",
          headerStyle: {
            height: 100,
          },
        }}
        name="settings"
        component={Settings}
      />
      <Stack.Screen
        name="Search Courses"
        component={SearchCourses}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Congratulations"
        component={Congratulations}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Change Password"
        component={ChangePassword}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Settings",
          headerStyle: {
            height: 100,
          },
        }}
      />
      <Stack.Screen
        name="CreditCardScreen"
        component={CreditCard}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackGroup;
