import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { gql, useQuery } from "@apollo/client";
import { DIALOG_FRAGMENT } from "../fragments";

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

export default function Dialog({ route, navigation }) {
  const { data, loading } = useQuery(SEE_DIALOG_QUERY, {
    variables: { id: route?.params?.id },
  });

  useEffect(() => {
    navigation.setOptions({
      title: route?.params?.talkingTo?.username,
    });
  });

  return (
    <View>
      <Text>Окно диалога</Text>
    </View>
  );
}
