import React from "react";
import { Text, View } from "react-native";
import { gql, useQuery } from "@apollo/client";
import { COMMENTS_FRAGMENT, POST_FRAGMENT } from "../fragments";

const SEE_FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      ...PostFragment
      caption
      comments {
        ...CommentFragment
      }
      user {
        username
        avatar
      }
      createdAt
      isMine
      isLiked
    }
  }
  ${POST_FRAGMENT}
  ${COMMENTS_FRAGMENT}
`;

export default function Feed({ navigation }) {
  const { data } = useQuery(SEE_FEED_QUERY);
  console.log(data);
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white" }}>Фото</Text>
    </View>
  );
}
