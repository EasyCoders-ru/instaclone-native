import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { Image, TouchableOpacity, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View``;
const Header = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
  align-items: center;
`;
const File = styled.Image``;
const Actions = styled.View``;
const Caption = styled.View``;
const Action = styled.TouchableOpacity``;
const Likes = styled.Text`
  color: white;
`;
const Username = styled.Text`
  color: white;
  font-weight: 600;
`;
const CaptionText = styled.Text`
  color: white;
`;
const UserAvatar = styled.Image`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  margin-right: 10px;
`;

function Photo({ id, user, file, caption, likes, commentsNumber, isLiked }) {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();

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
      <Actions>
        <Action />
        <Action />
      </Actions>
      <Likes>{likes === 1 ? "1 лайк" : `${likes} лайков`}</Likes>
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
