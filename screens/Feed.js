import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Feed({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Photo")}>
        <Text style={{ color: "white" }}>Фото</Text>
      </TouchableOpacity>
    </View>
  );
}
