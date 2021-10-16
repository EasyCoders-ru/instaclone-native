import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { colors } from "../colors";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: black;
  padding: 0px 20px;
`;

const Logo = styled.Image`
  height: 100px;
  max-width: 70%;
`;

const CreateAccount = styled.TouchableOpacity`
  padding: 13px 10px;
  margin-top: 20px;
  background-color: ${colors.blue};
  border-radius: 3px;
  width: 100%;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const CreateAccountText = styled.Text`
  color: white;
  font-weight: 600;
`;

const LoginLink = styled.Text`
  color: ${colors.blue};
  font-weight: 600;
  margin-top: 20px;
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
      <Logo resizeMode="cover" source={require("../assets/logo.png")} />
      <TouchableOpacity onPress={goToCreateAccount}>
        <CreateAccount disabled={false}>
          <CreateAccountText>Создать аккаунт</CreateAccountText>
        </CreateAccount>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToLogin}>
        <LoginLink>Войти в аккаунт</LoginLink>
      </TouchableOpacity>
    </Container>
  );
}
