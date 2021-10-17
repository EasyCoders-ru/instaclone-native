import React from "react";
import { Text, View } from "react-native";

export default function Profile() {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white" }}>Профиль</Text>
    </View>
  );
}
