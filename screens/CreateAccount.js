import React, { useEffect, useRef } from "react";
import { TextInput } from "../components/auth/AuthShared";
import { AuthButton } from "../components/auth/AuthButton";
import { AuthLayout } from "../components/auth/AuthLayout";
import { useForm } from "react-hook-form";

export default function CreateAccount() {
  const lastNameRef = useRef();
  const loginRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    register("firstName");
    register("lastName");
    register("username");
    register("email");
    register("password");
  }, [register]);

  const onNext = (nextRef) => {
    nextRef?.current?.focus();
  };

  const onSubmitValid = (data) => {
    console.log(data);
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
        onChangeText={(text) => {
          setValue("firstName", text);
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
        onChangeText={(text) => {
          setValue("lastName", text);
        }}
      />
      <TextInput
        ref={loginRef}
        placeholder="Логин"
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        returnKeyType="next"
        autoCapitalize="none"
        onSubmitEditing={() => {
          onNext(emailRef);
        }}
        onChangeText={(text) => {
          setValue("username", text);
        }}
      />
      <TextInput
        ref={emailRef}
        placeholder="Email"
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        returnKeyType="next"
        keyboardType="email-address"
        autoCapitalize="none"
        onSubmitEditing={() => {
          onNext(passwordRef);
        }}
        onChangeText={(text) => {
          setValue("email", text);
        }}
      />
      <TextInput
        ref={passwordRef}
        placeholder="Пароль"
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        returnKeyType="done"
        secureTextEntry
        lastOne
        onChangeText={(text) => {
          setValue("password", text);
        }}
        onSubmitEditing={handleSubmit(onSubmitValid)}
      />
      <AuthButton
        text="Создать аккаунт"
        disabled={false}
        onPress={handleSubmit(onSubmitValid)}
      />
    </AuthLayout>
  );
}
