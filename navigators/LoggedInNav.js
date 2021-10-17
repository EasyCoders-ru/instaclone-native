import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import { Ionicons } from "@expo/vector-icons";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import TabIcon from "../components/nav/TabIcon";
import { View } from "react-native";

const Tabs = createBottomTabNavigator();

export default function LoggedInNav() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "black",
          borderTopColor: "rgba(255,255,255,0.3)",
        },
      }}
    >
      <Tabs.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName="home" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName="search" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Camera"
        component={View}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName="camera" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName="heart" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName="person" color={color} focused={focused} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
