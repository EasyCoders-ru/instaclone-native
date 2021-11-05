import React, { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import useMe from "../hooks/useMe";
import { gql, useQuery } from "@apollo/client";
import { DIALOG_FRAGMENT } from "../fragments";
import ScreenLayout from "../components/ScreenLayout";
import styled from "styled-components/native";

const SEE_DIALOGS_QUERY = gql`
  query seeDialogs {
    seeDialogs {
      ...DialogParts
    }
  }
  ${DIALOG_FRAGMENT}
`;

const DialogContainer = styled.View`
  background-color: black;
`;

const DialogText = styled.Text`
  color: white;
`;

export default function Dialogs({ navigation }) {
  const { data: userData } = useMe();

  const { data, loading } = useQuery(SEE_DIALOGS_QUERY);

  useEffect(() => {
    navigation.setOptions({ title: userData?.me?.username });
  }, [userData?.me?.username]);

  const renderItem = ({ item: dialog }) => (
    <DialogContainer>
      <DialogText>
        {dialog.unreadTotal === 0
          ? "Имя пользователя"
          : `${dialog.unreadTotal} непрочитанных сообщения`}
      </DialogText>
    </DialogContainer>
  );

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
