import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";

export default function App() {
  const [loading, setLoading] = useState(true);

  const onLoading = () => {
    const fontsToLoad = [Ionicons.font];
    const fontsPromises = fontsToLoad.map((font) => Font.loadAsync(font));
    return Promise.all(fontsPromises);
  };

  const onFinish = () => {
    console.log("Шрифты загружены");
    setLoading(false);
  };

  if (loading) {
    return (
      <AppLoading
        startAsync={onLoading}
        onFinish={onFinish}
        onError={console.warn}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text>Привет, кодеры!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
