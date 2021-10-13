import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { colors } from "../colors";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const Logo = styled.Image`
  height: 100px;
  max-width: 50%;
`;

const CreateAccount = styled.View`
  padding: 7px 10px;
  background-color: ${colors.blue};
  border-radius: 3px;
`;

const CreateAccountText = styled.Text`
  color: white;
  font-weight: 600;
`;

const LoginLink = styled.Text`
  color: ${colors.blue};
  font-weight: 600;
  margin-top: 10px;
`;

export default function Welcome({ navigation }) {
  const goToCreateAccount = () => {
    navigation.navigate("CreateAccount");
  };

  const goToLogin = () => {
    navigation.navigate("LogIn");
  };

  return (
    <Container>
      <Logo resizeMode="contain" source={require("../assets/logo.png")} />
      <TouchableOpacity onPress={goToCreateAccount}>
        <CreateAccount>
          <CreateAccountText>Создать аккаунт</CreateAccountText>
        </CreateAccount>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToLogin}>
        <LoginLink>Войти в аккаунт</LoginLink>
      </TouchableOpacity>
    </Container>
  );
}
