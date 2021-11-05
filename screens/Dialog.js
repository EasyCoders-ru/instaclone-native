import React, { useEffect } from "react";
import { FlatList, KeyboardAvoidingView, TextInput } from "react-native";
import { gql, useQuery } from "@apollo/client";
import { DIALOG_FRAGMENT } from "../fragments";
import ScreenLayout from "../components/ScreenLayout";
import styled from "styled-components/native";

const SEE_DIALOG_QUERY = gql`
  query seeDialog($id: Int!) {
    seeDialog(id: $id) {
      ...DialogParts
      messages {
        id
        payload
        user {
          id
          username
          avatar
        }
        read
      }
    }
  }
  ${DIALOG_FRAGMENT}
`;

const MessageContainer = styled.View``;
const Author = styled.View``;
const Avatar = styled.Image``;
const Username = styled.Text`
  color: white;
`;
const Message = styled.Text`
  color: white;
`;

export default function Dialog({ route, navigation }) {
  const { data, loading } = useQuery(SEE_DIALOG_QUERY, {
    variables: { id: route?.params?.id },
  });

  useEffect(() => {
    navigation.setOptions({
      title: route?.params?.talkingTo?.username,
    });
  });

  const renderItem = ({ item: message }) => (
    <MessageContainer>
      <Author>
        <Avatar source={{ uri: message?.user?.avatar }} />
        <Username>{message?.user?.username}</Username>
      </Author>
      <Message>{message.payload}</Message>
    </MessageContainer>
  );

  return (
    <KeyboardAvoidingView
      style={{ backgroundColor: "black", flex: 1 }}
      behavior="height"
      keyboardVerticalOffset={100}
    >
      <ScreenLayout loading={loading}>
        <FlatList
          data={data?.seeDialog?.messages}
          keyExtractor={(message) => "" + message.id}
          renderItem={renderItem}
          style={{ width: "100%" }}
          inverted
        />
        <TextInput
          placeholder="Введите текст сообщения"
          returnKeyType="send"
          returnKeyLabel="Отправить"
        />
      </ScreenLayout>
    </KeyboardAvoidingView>
  );
}
