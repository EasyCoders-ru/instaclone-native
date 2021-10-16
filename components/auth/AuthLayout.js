import React from "react";
import {
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: black;
  padding: 0 40px;
`;

const Logo = styled.Image`
  height: 100px;
  max-width: 80%;
`;

export function AuthLayout({ children }) {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback style={{ flex: 1 }} onPress={dismissKeyboard}>
      <Container>
        <KeyboardAvoidingView
          style={{
            width: "100%",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
          behavior="padding"
          keyboardVerticalOffset={Platform.OS === "ios" ? 30 : 0}
        >
          <Logo resizeMode="cover" source={require("../../assets/logo.png")} />
          {children}
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  );
}
