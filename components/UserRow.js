import React from "react";
import styled from "styled-components/native";

const Container = styled.View``;
const Column = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 15px;
`;
const FollowBtn = styled.TouchableOpacity``;
const FollowBtnText = styled.Text``;
const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
`;
const Username = styled.Text`
  color: white;
  font-weight: 600;
`;

export default function UserRow({ username, avatar, isMe, isFollowing }) {
  return (
    <Container>
      <Column>
        <Avatar source={{ uri: avatar }} />
        <Username>{username}</Username>
      </Column>
      {!isMe ? (
        <FollowBtn>
          <FollowBtnText>
            {isFollowing ? "Отписаться" : "Подписаться"}
          </FollowBtnText>
        </FollowBtn>
      ) : null}
    </Container>
  );
}
