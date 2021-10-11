import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Welcome({ navigation }) {
  return (
    <View>
      <Text>Добро пожаловать!</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("CreateAccount");
        }}
      >
        <View>
          <Text>Создать аккаунт</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("LogIn");
        }}
      >
        <View>
          <Text>Войти в аккаунт</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
