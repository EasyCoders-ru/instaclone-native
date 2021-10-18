import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { useWindowDimensions } from "react-native";

const Container = styled.View``;
const Header = styled.View``;
const File = styled.Image``;
const Actions = styled.View``;
const Caption = styled.View``;
const Action = styled.TouchableOpacity``;
const Likes = styled.Text`
  color: white;
`;
const Username = styled.Text`
  color: white;
`;
const CaptionText = styled.Text`
  color: white;
`;
const UserAvatar = styled.Image``;

function Photo({ id, user, file, caption, likes, commentsNumber, isLiked }) {
  const { width, height } = useWindowDimensions();
  return (
    <Container>
      <Header>
        <UserAvatar />
        <Username>{user.username}</Username>
      </Header>
      <File style={{ width, height: height - 500 }} source={{ uri: file }} />
      <Actions>
        <Action />
        <Action />
      </Actions>
      <Likes>{likes === 1 ? "1 лайк" : `${likes} лайков`}</Likes>
      <Caption>
        <Username>{user.username}</Username>
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
