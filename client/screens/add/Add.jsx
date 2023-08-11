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
import { fonts } from "../../constants/fonts";
import styles from "./add_page_style";
import FormComponent from "../../components/add/FormComponent";

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

  useEffect(() => {
    if (photo) console.log((photo.encoded.length * (3 / 4)) / 1024);
  }, [photo]);

  if (photo) {
    const savePhoto = async () => {
      try {
        await MediaLibrary.saveToLibraryAsync(photo.normal.uri);
        alert("Saved to gallery on this device!");
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: fonts.bold,
              textAlign: "center",
              padding: 20,
            }}
          >
            Upload your own recipe!
          </Text>
          <View>
            <View style={styles.imageContainer}>
              <TouchableOpacity
                style={styles.buttonSave}
                onPress={() =>
                  hasMediaLibraryPermissions
                    ? savePhoto()
                    : alert("No permission")
                }
              >
                <Image
                  source={{
                    uri: "https://icons.veryicon.com/png/o/education-technology/big-data-cloud-service-general-icon-library/icon-save.png",
                  }}
                  style={{ width: 20, height: 20 }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setPhoto()}
                style={styles.imagePreview}
              >
                <Image
                  source={{ uri: photo.encoded }}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonSave}>
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/1358/1358023.png",
                  }}
                  style={{ width: 20, height: 20 }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </View>
            <FormComponent photo={photo.encoded} />
          </View>
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
