import React, { useState, useEffect } from "react";
import { TouchableOpacity, StatusBar } from "react-native";
import styled from "styled-components/native";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

const Actions = styled.View`
  flex: 0.35;
  padding: 0 50px;
  justify-content: space-around;
  align-items: center;
`;

const ButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TakePhotoBtn = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 50px;
`;

const SliderContainer = styled.View``;
const ActionsContainer = styled.View`
  flex-direction: row;
`;

const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export default function TakePhoto({ navigation }) {
  const [ok, setOk] = useState(false);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.front);
  const [zoom, setZoom] = useState(0);

  const requestPermissions = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    setOk(status);
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  const onCameraSwitch = () => {
    if (cameraType === Camera.Constants.Type.back) {
      setCameraType(Camera.Constants.Type.front);
    } else {
      setCameraType(Camera.Constants.Type.back);
    }
  };

  const onZoomChange = (e) => {
    setZoom(e);
  };

  const onFlashChange = () => {
    if (flashMode === Camera.Constants.FlashMode.off) {
      setFlashMode(Camera.Constants.FlashMode.on);
    } else if (flashMode === Camera.Constants.FlashMode.on) {
      setFlashMode(Camera.Constants.FlashMode.auto);
    } else if (flashMode === Camera.Constants.FlashMode.auto) {
      setFlashMode(Camera.Constants.FlashMode.off);
    }
  };

  return (
    <Container>
      <StatusBar hidden={true} />
      <Camera
        type={cameraType}
        style={{ flex: 1 }}
        zoom={zoom}
        flashMode={flashMode}
      >
        <CloseButton onPress={() => navigation.navigate("Tabs")}>
          <Ionicons name="close" color="white" size={30} />
        </CloseButton>
      </Camera>
      <SliderContainer>
        <Slider
          style={{ width: 200, height: 20 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="rgba(255,255,255,0.5)"
          onValueChange={onZoomChange}
        />
      </SliderContainer>
      <Actions>
        <ButtonsContainer>
          <TakePhotoBtn />
          <ActionsContainer>
            <TouchableOpacity
              onPress={onFlashChange}
              style={{ marginRight: 30 }}
            >
              <Ionicons
                name={
                  flashMode === Camera.Constants.FlashMode.off
                    ? "flash-off"
                    : flashMode === Camera.Constants.FlashMode.on
                    ? "flash"
                    : flashMode === Camera.Constants.FlashMode.auto
                    ? "eye"
                    : ""
                }
                color="white"
                size={30}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={onCameraSwitch}>
              <Ionicons
                name={
                  cameraType === Camera.Constants.Type.front
                    ? "camera-reverse"
                    : "camera"
                }
                color="white"
                size={30}
              />
            </TouchableOpacity>
          </ActionsContainer>
        </ButtonsContainer>
      </Actions>
    </Container>
  );
}
