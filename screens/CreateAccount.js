import React, { useRef } from "react";
import { TextInput } from "react-native";
import { AuthButton } from "../components/auth/AuthButton";
import { AuthLayout } from "../components/auth/AuthLayout";

export default function CreateAccount() {
  const lastNameRef = useRef();
  const loginRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onNext = (nextRef) => {
    nextRef?.current?.focus();
  };

  const onDone = () => {
    alert("Форма отправлена!");
  };

  return (
    <AuthLayout>
      <TextInput
        placeholder="Имя"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "100%" }}
        onSubmitEditing={() => {
          onNext(lastNameRef);
        }}
      />
      <TextInput
        ref={lastNameRef}
        placeholder="Фамилия"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "100%" }}
        onSubmitEditing={() => {
          onNext(loginRef);
        }}
      />
      <TextInput
        ref={loginRef}
        placeholder="Логин"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "100%" }}
        onSubmitEditing={() => {
          onNext(emailRef);
        }}
      />
      <TextInput
        ref={emailRef}
        placeholder="Email"
        placeholderTextColor="gray"
        returnKeyType="next"
        keyboardType="email-address"
        style={{ backgroundColor: "white", width: "100%" }}
        onSubmitEditing={() => {
          onNext(passwordRef);
        }}
      />
      <TextInput
        ref={passwordRef}
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
