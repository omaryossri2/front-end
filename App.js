import React from 'react';
import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './components/LandingPage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        {/* Add more screens here if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
