import React from "react";
import { TextInput } from "react-native";
import { AuthButton } from "../components/auth/AuthButton";
import { AuthLayout } from "../components/auth/AuthLayout";

export default function CreateAccount() {
  return (
    <AuthLayout>
      <TextInput
        placeholder="Имя"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "100%" }}
      />
      <TextInput
        placeholder="Фамилия"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "100%" }}
      />
      <TextInput
        placeholder="Логин"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "100%" }}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="gray"
        returnKeyType="next"
        keyboardType="email-address"
        style={{ backgroundColor: "white", width: "100%" }}
      />
      <TextInput
        placeholder="Пароль"
        placeholderTextColor="gray"
        returnKeyType="next"
        secureTextEntry
        style={{ backgroundColor: "white", width: "100%" }}
      />
      <AuthButton text="Создать аккаунт" disabled={false} onPress={() => {}} />
    </AuthLayout>
  );
}
