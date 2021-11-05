import React, { useEffect } from "react";
import { FlatList, KeyboardAvoidingView } from "react-native";
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

const MessageContainer = styled.View`
  flex-direction: ${(props) => (props.outgoing ? "row-reverse" : "row")}
  align-items: flex-end;
  padding: 0 10px;
`;
const Author = styled.View``;
const Avatar = styled.Image`
  width: 20px;
  height: 20px;
  border-radius: 10px;
`;
const Username = styled.Text`
  color: white;
`;
const Message = styled.Text`
  color: white;
  margin: 0 10px;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 5px 10px;
  border-radius: 10px;
  overflow: hidden;
  font-size: 16px;
`;
const TextInput = styled.TextInput`
  width: 95%;
  padding: 10px 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  margin-bottom: 50px;
  margin-top: 25px;
  border-radius: 999px;
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
    <MessageContainer
      outgoing={message.user.username !== route?.params?.talkingTo?.username}
    >
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
      behavior="padding"
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
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          placeholder="Введите текст сообщения"
          returnKeyType="send"
          returnKeyLabel="Отправить"
        />
      </ScreenLayout>
    </KeyboardAvoidingView>
  );
}
