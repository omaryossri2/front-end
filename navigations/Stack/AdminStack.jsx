import { createStackNavigator } from "@react-navigation/stack";
import AdminCourseEdit from "../../Screens/Admin/AdminCourseEdit";
import AdminTabs from "../Tabs/AdminTabs";
import { Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const stack = createStackNavigator();

const AdminStack = () => {
  const { logout } = useContext(AuthContext);
  return (
    <stack.Navigator
      screenOptions={{
        headerRight: () => (
          <TouchableOpacity style={{ marginRight: 10 }} onPress={logout}>
            <Text>Logout</Text>
          </TouchableOpacity>
        ),
      }}
    >
      <stack.Screen name="AdminTabs" component={AdminTabs} />
      <stack.Screen name="Edit Course" component={AdminCourseEdit} />
    </stack.Navigator>
  );
};

export default AdminStack;
