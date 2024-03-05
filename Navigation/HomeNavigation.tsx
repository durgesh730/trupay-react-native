import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "../screens/LoginScreen";
import BottomNavigation from "./BottomNavigation";

const HomeNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="DashBoard"
        component={BottomNavigation}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
