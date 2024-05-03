import EditProfile from "../../Screens/ProfileStack/EditProfile";
import Settings from "../../Screens/ProfileStack/Settings";
import CourseDetails from "../../Screens/StackScreens/CourseDetails";
import SeeAllCategories from "../../Screens/StackScreens/SeeAllCategories";
import SeeAllCourses from "../../Screens/StackScreens/SeeAllCourses";
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
      <Stack.Screen name="Course Details" component={CourseDetails} />
      <Stack.Screen name="See All courses" component={SeeAllCourses} />
      <Stack.Screen name="See All categories" component={SeeAllCategories} />
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
    </Stack.Navigator>
  );
};

export default HomeStackGroup;
