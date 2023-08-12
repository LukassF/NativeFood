import { Text, TouchableOpacity, View, Dimensions } from "react-native";

import { useEffect, useState, useRef } from "react";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as ImageManipulator from "expo-image-manipulator";

const CameraComponent = ({
  setPhoto,
  setCameraPermissions,
  setMediaLibraryPermissions,
  hasCameraPermissions,
}) => {
  let cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const cameraPermissions = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermissions =
        await MediaLibrary.requestPermissionsAsync();

      setCameraPermissions(cameraPermissions.status === "granted");
      setMediaLibraryPermissions(mediaLibraryPermissions.status === "granted");
    })();
  }, []);

  if (!hasCameraPermissions) {
    return <Text>Cannot open camera. Insufficient permissions.</Text>;
  }

  const takePic = async () => {
    let options = {
      quality: 0.4,
      base64: true,
      exif: false,
      skipProcessing: false,
    };
    try {
      let newPhoto = await cameraRef.current.takePictureAsync(options);

      const manipResult = await ImageManipulator.manipulateAsync(
        newPhoto.uri,
        [{ resize: { width: 1, height: 1 } }],
        { compress: 0.5, format: "jpeg" }
      );
      let encodedPhoto = `data:image/jpg;base64,${newPhoto.base64}`;
      setPhoto({ normal: newPhoto, encoded: encodedPhoto });
    } catch (err) {
      console.log(err);
    }
  };

  const { width, height } = Dimensions.get("screen");

  return (
    <>
      <Camera
        style={{
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          left: -(Math.round((height * 9) / 16) - width) / 2,
          height: height,

          width: Math.round((height * 9) / 16),
          // flex: 1,
        }}
        ref={cameraRef}
        ratio="16:9"
      >
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 500,

            position: "absolute",
            bottom: "15%",
            overflow: "hidden",
          }}
        >
          <TouchableOpacity
            style={{
              width: "100%",
              aspectRatio: 1 / 1,
              backgroundColor: "white",
            }}
            onPress={takePic}
          ></TouchableOpacity>
        </View>
      </Camera>
    </>
  );
};

export default CameraComponent;
