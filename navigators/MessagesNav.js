import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dialogs from "../screens/Dialogs";
import Dialog from "../screens/Dialog";

const Stack = createStackNavigator();

export default function MessagesNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dialogs" component={Dialogs} />
      <Stack.Screen name="Dialog" component={Dialog} />
    </Stack.Navigator>
  );
}
