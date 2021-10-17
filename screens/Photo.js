import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Photo({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Text style={{ color: "white" }}>Профиль автора</Text>
      </TouchableOpacity>

      <Text style={{ color: "white" }}>Фото</Text>
    </View>
  );
}
