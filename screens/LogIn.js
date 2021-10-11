import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function LogIn({ navigation }) {
  return (
    <View>
      <Text>Вход в аккаунт</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("CreateAccount");
        }}
      >
        <View>
          <Text>Перейти к созданию аккаунта</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
