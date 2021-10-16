import React from "react";
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
  return (
    <Container>
      <Logo resizeMode="cover" source={require("../../assets/logo.png")} />
      {children}
    </Container>
  );
}
