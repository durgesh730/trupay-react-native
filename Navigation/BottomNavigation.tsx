import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import DashboardScreen from "../screens/DashboardScreen";
import AddMember from "../screens/AddMember";
import ReportScreen from "../screens/ReportScreen";
import MyTeamScreen from "../screens/MyTeamScreen";
import MyProfileScreen from "../screens/MyProfileScreen";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { color1 } from "../constants/COLORS";

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: color1,
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop:2,
          height:60,
          
        },
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
        name="Dashboard"
        component={DashboardScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="adduser" size={size} color={color} />
          ),
        }}
        name="Add Member"
        component={AddMember}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="google-analytics"
              size={size}
              color={color}
            />
          ),
        }}
        name="Reports"
        component={ReportScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-friends" size={size} color={color} />
          ),
        }}
        name="My Team"
        component={MyTeamScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
        name="My Profile"
        component={MyProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
