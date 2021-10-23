import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import SelectPhoto from "../screens/SelectPhoto";
import TakePhoto from "../screens/TakePhoto";

const Tabs = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export default function UploadsNav() {
  return (
    <Tabs.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        tabBarStyle: { backgroundColor: "black" },
        tabBarActiveTintColor: "white",
        tabBarIndicatorStyle: {
          backgroundColor: "white",
          top: 0,
        },
      }}
    >
      <Tabs.Screen name="Select">
        {() => (
          <Stack.Navigator>
            <Stack.Screen name="Select" component={SelectPhoto} />
          </Stack.Navigator>
        )}
      </Tabs.Screen>
      <Tabs.Screen name="Take">
        {() => (
          <Stack.Navigator>
            <Stack.Screen name="Take" component={TakePhoto} />
          </Stack.Navigator>
        )}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
}
