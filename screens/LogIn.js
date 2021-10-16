import React from "react";
import { AuthButton } from "../components/auth/AuthButton";
import { AuthLayout } from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

export default function LogIn({ navigation }) {
  return (
    <AuthLayout>
      <TextInput
        placeholder="Логин"
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        returnKeyType="next"
      />
      <TextInput
        placeholder="Пароль"
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        lastOne
        returnKeyType="done"
      />

      <AuthButton text="Войти в аккаунт" disabled={false} onPress={() => {}} />
    </AuthLayout>
  );
}
