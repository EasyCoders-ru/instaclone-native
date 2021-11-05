import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors } from "../colors";
import DismissKeyboard from "../components/DismissKeyboard";

const Container = styled.View`
  flex: 1;
  background-color: black;
  padding: 0px 50px;
`;

const Photo = styled.Image`
  height: 350px;
`;

const CaptionsContainer = styled.View`
  margin-top: 30px;
`;

const Caption = styled.TextInput`
  background-color: white;
  color: black;
  padding: 10px 20px;
  border-radius: 100px;
`;

const HeaderRightText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.blue};
  margin-right: 7px;
`;

export default function UploadForm({ navigation, route }) {
  const { register, handleSubmit, getValues, setValue } = useForm();

  const HeaderRight = () => (
    <TouchableOpacity
      onPress={() => navigation.navigate("UploadForm", { file: choosenPhoto })}
    >
      <HeaderRightText>Далее</HeaderRightText>
    </TouchableOpacity>
  );

  const HeaderRightLoading = () => (
    <ActivityIndicator size="small" color="white" style={{ marginRight: 10 }} />
  );

  useEffect(() => {
    register("caption");
  }, [register]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: HeaderRightLoading,
    });
  });

  const onSubmitValid = ({ caption }) => {};

  return (
    <DismissKeyboard>
      <Container>
        <Photo source={{ uri: route.params.file }} />
        <CaptionsContainer>
          <Caption
            returnKeyType="done"
            placeholder="Введите подпись к фото..."
            placeholderTextColor="rgba(0,0,0,0.5)"
            onChangeText={(text) => {
              setValue("caption", text);
            }}
            onSubmitEditing={handleSubmit(onSubmitValid)}
          />
        </CaptionsContainer>
      </Container>
    </DismissKeyboard>
  );
}
