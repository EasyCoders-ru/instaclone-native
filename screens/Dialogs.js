import React, { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import useMe from "../hooks/useMe";
import { gql, useQuery } from "@apollo/client";
import { DIALOG_FRAGMENT } from "../fragments";
import ScreenLayout from "../components/ScreenLayout";
import styled from "styled-components/native";
import { colors } from "../colors";

const SEE_DIALOGS_QUERY = gql`
  query seeDialogs {
    seeDialogs {
      ...DialogParts
    }
  }
  ${DIALOG_FRAGMENT}
`;

const DialogContainer = styled.View`
  width: 100%;
  padding: 15px 10px;
  background-color: black;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const UnreadText = styled.Text`
  color: white;
  margin-top: 10px;
  font-weight: 500;
`;

const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 20px;
`;

const Username = styled.Text`
  font-weight: 600;
  font-size: 16px;
  color: white;
`;

const Data = styled.View``;

const Column = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

const UnreadDot = styled.View`
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background-color: ${colors.blue};
`;

export default function Dialogs({ navigation }) {
  const { data: meData } = useMe();

  const { data, loading } = useQuery(SEE_DIALOGS_QUERY);

  useEffect(() => {
    navigation.setOptions({ title: meData?.me?.username });
  }, [meData?.me?.username]);

  const renderItem = ({ item: dialog }) => {
    const notMe = dialog?.users.find(
      (user) => user.username !== meData?.me?.username
    );

    return (
      <DialogContainer>
        <Column>
          <Avatar source={{ uri: notMe.avatar }} />
          <Data>
            <Username>{notMe.username}</Username>
            {dialog.unreadTotal > 0 && (
              <UnreadText>
                {dialog.unreadTotal === 1
                  ? "1 непрочитанное сообщение"
                  : `${dialog.unreadTotal} непрочитанных сообщений`}
              </UnreadText>
            )}
          </Data>
        </Column>
        <Column>{dialog.unreadTotal > 0 && <UnreadDot />}</Column>
      </DialogContainer>
    );
  };

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        data={data?.seeDialogs}
        keyExtractor={(dialog) => "" + dialog.id}
        renderItem={renderItem}
      />
    </ScreenLayout>
  );
}
