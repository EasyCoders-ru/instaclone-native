import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import DismissKeyboard from "../components/DismissKeyboard";

export default function Search({ navigation }) {
  const { register, setValue } = useForm();
  const SearchBox = () => (
    <TextInput
      style={{ backgroundColor: "white" }}
      placeholderTextColor="black"
      placeholder="Поиск по фото"
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyType="search"
      returnKeyLabel="Поиск"
      onChangeText={(text) => {
        setValue("keyword", text);
      }}
    />
  );
  useEffect(() => {
    register("keyword");
    navigation.setOptions({ headerTitle: SearchBox });
  }, [register]);
  return (
    <DismissKeyboard>
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
    </DismissKeyboard>
  );
}
