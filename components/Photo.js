import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { Image, TouchableOpacity, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { gql, useMutation } from "@apollo/client";

const TOGGLE_LIKE_MUTATION = gql`
  mutation toggleLike($id: Int!) {
    toggleLike(id: $id) {
      ok
      error
    }
  }
`;

const Container = styled.View``;
const Header = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
  align-items: center;
`;
const File = styled.Image``;
const Actions = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Caption = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Action = styled.TouchableOpacity`
  margin-right: 10px;
`;
const Likes = styled.Text`
  color: white;
  margin: 7px 0;
  font-weight: 600;
`;
const Username = styled.Text`
  color: white;
  font-weight: 600;
`;
const CaptionText = styled.Text`
  color: white;
  margin-left: 5px;
`;
const UserAvatar = styled.Image`
  height: 25px;
  width: 25px;
  border-radius: 12.5;
  margin-right: 10px;
`;

const ExtraContainer = styled.View`
  padding: 10px;
`;

function Photo({ id, user, file, caption, likes, commentsNumber, isLiked }) {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();

  const updateToggleLike = (cache, result) => {
    const {
      data: {
        toggleLike: { ok },
      },
    } = result;
    if (ok) {
      cache.modify({
        id: `Photo:${id}`,
        fields: {
          isLiked(prev) {
            return !prev;
          },
          likes(prev) {
            if (isLiked) {
              return prev - 1;
            }
            return prev + 1;
          },
        },
      });
    }
  };

  const [toggleLike] = useMutation(TOGGLE_LIKE_MUTATION, {
    variables: {
      id,
    },
    update: updateToggleLike,
  });

  const [imageHeight, setImageHeight] = useState(height - 500);
  useEffect(() => {
    Image.getSize(file, (width, height) => {
      setImageHeight(height / 3);
    });
  }, [file]);

  return (
    <Container>
      <Header
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <UserAvatar resizeMode="cover" source={{ uri: user?.avatar }} />
        <Username>{user.username}</Username>
      </Header>
      <File
        resizeMode="cover"
        style={{ width, height: imageHeight }}
        source={{ uri: file }}
      />
      <ExtraContainer>
        <Actions>
          <Action onPress={toggleLike}>
            <Ionicons
              name={isLiked ? "heart" : "heart-outline"}
              color={isLiked ? "tomato" : "white"}
              size={22}
            />
          </Action>
          <Action
            onPress={() => {
              navigation.navigate("Comments");
            }}
          >
            <Ionicons name="chatbubble-outline" color="white" size={22} />
          </Action>
        </Actions>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Likes");
          }}
        >
          <Likes>{likes === 1 ? "1 лайк" : `${likes} лайков`}</Likes>
        </TouchableOpacity>
        <Caption>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            <Username>{user.username}</Username>
          </TouchableOpacity>
          <CaptionText>{caption}</CaptionText>
        </Caption>
      </ExtraContainer>
    </Container>
  );
}

Photo.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }),
  file: PropTypes.string.isRequired,
  caption: PropTypes.string,
  likes: PropTypes.number.isRequired,
  commentsNumber: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
};

export default Photo;
