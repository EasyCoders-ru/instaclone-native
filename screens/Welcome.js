import React from "react";
import { Text, View, StyleSheet, useColorScheme } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Welcome({ navigation }) {
  const colorScheme = useColorScheme();

  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <Text style={[styles.text, themeTextStyle]}>Добро пожаловать!</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("CreateAccount");
        }}
      >
        <View style={[styles.container, themeContainerStyle]}>
          <Text style={[styles.text, themeTextStyle]}>Создать аккаунт</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("LogIn");
        }}
      >
        <View style={[styles.container, themeContainerStyle]}>
          <Text style={[styles.text, themeTextStyle]}>Войти в аккаунт</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  lightContainer: {
    backgroundColor: "#d0d0c0",
  },
  darkContainer: {
    backgroundColor: "#242c40",
  },
  lightThemeText: {
    color: "#242c40",
  },
  darkThemeText: {
    color: "#d0d0c0",
  },
});
