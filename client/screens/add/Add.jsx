import { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CameraComponent from "../../components/add/CameraComponent";
import * as MediaLibrary from "expo-media-library";

const Add = ({ navigation }) => {
  const [photo, setPhoto] = useState();
  const [hasCameraPermissions, setCameraPermissions] = useState();
  const [hasMediaLibraryPermissions, setMediaLibraryPermissions] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  //checking if the screen with the camera is focused on to prevent multiple Camera component instances
  navigation.addListener("focus", () => {
    setIsLoaded(true);
  });
  navigation.addListener("blur", () => {
    setIsLoaded(false);
  });
  //-----------------------------------------------

  // useEffect(() => {
  //   if (photo) {
  //     console.log(photo.encoded);
  //   }
  // }, [photo]);

  if (photo) {
    const savePhoto = async () => {
      try {
        await MediaLibrary.saveToLibraryAsync(photo.normal.uri);
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
        <ScrollView>
          <TouchableOpacity onPress={() => setPhoto()}>
            <Text>Photo Taken</Text>
          </TouchableOpacity>
          {hasMediaLibraryPermissions && (
            <TouchableOpacity onPress={savePhoto}>
              <Text>Save to gallery</Text>
            </TouchableOpacity>
          )}
          <Image
            source={{ uri: photo.encoded }}
            style={{ width: 100, height: 100 }}
          />
        </ScrollView>
      </SafeAreaView>
    );
  } else if (isLoaded)
    return (
      <CameraComponent
        setPhoto={setPhoto}
        setCameraPermissions={setCameraPermissions}
        setMediaLibraryPermissions={setMediaLibraryPermissions}
        hasCameraPermissions={hasCameraPermissions}
      />
    );
};

export default Add;
