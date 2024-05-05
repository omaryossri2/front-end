import EditProfile from "../../Screens/ProfileStack/EditProfile";
import Settings from "../../Screens/ProfileStack/Settings";
import Category from "../../Screens/StackScreens/Category";
import Congratulations from "../../Screens/StackScreens/Congratulations";
import CourseDetails from "../../Screens/StackScreens/CourseDetails";
import SearchCourses from "../../Screens/StackScreens/SearchCourses";
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
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Course Details"
        component={CourseDetails}
      />
      <Stack.Screen
        name="Category"
        component={Category}
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
      {/* <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerTitle: "Categories",
          headerStyle: {
            height: 100,
          },
        }}
        name="See All categories"
        component={SeeAllCategories}
      /> */}
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
    </Stack.Navigator>
  );
};

export default HomeStackGroup;
