import React from "react";
import { Text, View, FlatList } from "react-native";
import { gql, useQuery } from "@apollo/client";
import { COMMENTS_FRAGMENT, POST_FRAGMENT } from "../fragments";
import ScreenLayout from "../components/ScreenLayout";

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
  const { data, loading } = useQuery(SEE_FEED_QUERY);

  const renderPhoto = ({ item: photo }) => (
    <View style={{ flex: 1 }}>
      <Text style={{ color: "white" }}>{photo.caption}</Text>
    </View>
  );

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        data={data?.seeFeed}
        renderItem={renderPhoto}
        keyExtractor={(photo) => "" + photo.id}
      />
    </ScreenLayout>
  );
}
