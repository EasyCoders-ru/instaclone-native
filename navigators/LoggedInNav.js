import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabsNav from "./TabsNav";
import UploadsNav from "./UploadsNav";

const Stack = createStackNavigator();

export default function LoggedInNav() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Tabs" component={TabsNav} />
      <Stack.Screen name="Uploads" component={UploadsNav} />
    </Stack.Navigator>
  );
}
