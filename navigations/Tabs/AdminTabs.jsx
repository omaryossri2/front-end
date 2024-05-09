import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllCourses from "../../Screens/Admin/AllCourses";
import AddCourse from "../../Screens/Admin/AddCourse";
import { Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const AdminTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation, route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name === "Courses") {
            iconName = focused ? "book" : "book-outline";
          } else if (route.name === "Add Course") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          //   backgroundColor: "#ddd",
          padding: 10,
          borderTopWidth: 0,
          elevation: 0, //Android
          shadowOpacity: 0, // IOS
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          // height: 40,
        },
        tabBarActiveTintColor: "#0961f5",
        tabBarInactiveTintColor: "gray",
        // headerShown: false,
        tabBarLabelStyle: {
          textTransform: "capitalize",
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Courses" component={AllCourses} />
      <Tab.Screen name="Add Course" component={AddCourse} />
    </Tab.Navigator>
  );
};

export default AdminTabs;

//{
// headerRight: () => (
//     <TouchableOpacity style={{ marginRight: 10 }}>
//       <Text>Logout</Text>
//     </TouchableOpacity>
//   ),
// }
