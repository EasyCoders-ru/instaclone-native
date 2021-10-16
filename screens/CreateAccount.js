import React, { useRef } from "react";
import { TextInput } from "../components/auth/AuthShared";
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
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        returnKeyType="next"
        onSubmitEditing={() => {
          onNext(lastNameRef);
        }}
      />
      <TextInput
        ref={lastNameRef}
        placeholder="Фамилия"
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        returnKeyType="next"
        onSubmitEditing={() => {
          onNext(loginRef);
        }}
      />
      <TextInput
        ref={loginRef}
        placeholder="Логин"
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        returnKeyType="next"
        onSubmitEditing={() => {
          onNext(emailRef);
        }}
      />
      <TextInput
        ref={emailRef}
        placeholder="Email"
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        returnKeyType="next"
        keyboardType="email-address"
        onSubmitEditing={() => {
          onNext(passwordRef);
        }}
      />
      <TextInput
        ref={passwordRef}
        placeholder="Пароль"
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        returnKeyType="done"
        secureTextEntry
        lastOne
      />
      <AuthButton text="Создать аккаунт" disabled={false} onPress={() => {}} />
    </AuthLayout>
  );
}
