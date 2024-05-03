import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../Screens/Home";
import MyCourses from "../../Screens/MyCourses";
import Cart from "../../Screens/Cart";
import Profile from "../../Screens/Profile";
import { Ionicons } from "@expo/vector-icons";

const tab = createBottomTabNavigator();

const TabGroup = () => {
  return (
    <tab.Navigator
      screenOptions={({ navigation, route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "My Courses") {
            iconName = focused ? "book" : "book-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          //   backgroundColor: "#ddd",
          padding: 10,
          borderTopWidth: 0,
          elevation: 0, //Android
          shadowOpacity: 0, // IOS
          marginBottom: 10,
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
      <tab.Screen name="Home" component={Home} />
      <tab.Screen
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            height: 100,
          },
        }}
        name="My Courses"
        component={MyCourses}
      />
      <tab.Screen
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            height: 100,
          },
        }}
        name="Cart"
        component={Cart}
      />
      <tab.Screen
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            height: 100,
          },
        }}
        name="Profile"
        component={Profile}
      />
    </tab.Navigator>
  );
};

export default TabGroup;
