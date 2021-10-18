import React, { useState } from "react";
import { Text, View, FlatList } from "react-native";
import { gql, useQuery } from "@apollo/client";
import { COMMENTS_FRAGMENT, POST_FRAGMENT } from "../fragments";
import ScreenLayout from "../components/ScreenLayout";
import Photo from "../components/Photo";

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
  const { data, loading, refetch } = useQuery(SEE_FEED_QUERY);
  const [refreshing, setRefreshing] = useState(false);

  const renderPhoto = ({ item: photo }) => <Photo {...photo} />;
  const refresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        data={data?.seeFeed}
        renderItem={renderPhoto}
        keyExtractor={(photo) => "" + photo.id}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
        onRefresh={refresh}
        refreshing={refreshing}
      />
    </ScreenLayout>
  );
}
