import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./saved_card_style";
import { useDispatch, useSelector } from "react-redux";
import { removeFromSaved, saveRecipe } from "../../app/redux/slice";
import icons from "../../constants/icons";

const SavedCard = ({ fetchedData, navigation, index }) => {
  const dispatch = useDispatch();
  const savedRecipies = useSelector((state) => state.savedRecipies);
  const difficultyArray = new Array(fetchedData.difficulty)
    .fill(1)
    .concat(new Array(5 - fetchedData.difficulty).fill(0));

  const saved = savedRecipies.find((item) => item === fetchedData._id);

  return (
    <TouchableOpacity
      style={styles.savedCard(index)}
      onPress={() => navigation.navigate("Details", { _id: fetchedData._id })}
    >
      <View style={styles.saveCardImage}>
        <Image
          source={{
            uri: fetchedData.image,
          }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
          //   blurRadius={10}
        />
      </View>
      <View style={styles.saveCardContent}>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => {
            dispatch(
              !saved
                ? saveRecipe(fetchedData._id)
                : removeFromSaved(fetchedData._id)
            );
          }}
        >
          <Image
            source={saved ? icons.saveIconFilled : icons.saveIconOutline}
            style={styles.saveImage(saved)}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View
          style={{
            padding: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              fontWeight: 600,
              width: "100%",
            }}
            numberOfLines={1}
          >
            {fetchedData.name}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "#9b9b9b",
              width: "100%",
              textAlign: "center",
            }}
            numberOfLines={1}
          >
            {fetchedData.subtitle}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            {difficultyArray.map((item) => {
              if (item === 1) {
                return (
                  <Image
                    source={icons.starFilled}
                    style={styles.starImage(true)}
                    key={Math.random()}
                  />
                );
              } else {
                return (
                  <Image
                    source={icons.starOutline}
                    style={styles.starImage(false)}
                    key={Math.random()}
                  />
                );
              }
            })}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 15,
              //   backgroundColor: "red",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                // marginTop: 10,
              }}
            >
              <Image
                source={icons.clock}
                style={{ width: 10, height: 10, tintColor: "#9b9b9b" }}
              />
              <Text style={{ fontSize: 10, color: "#9b9b9b" }}>
                {Math.floor(fetchedData.time / 60) !== 0
                  ? Math.floor(fetchedData.time / 60) + "h "
                  : ""}
                {fetchedData.time % 60 !== 0
                  ? (fetchedData.time % 60) + "min"
                  : ""}
              </Text>
            </View>
            <Text style={{ fontSize: 10, color: "#9b9b9b" }}>
              {fetchedData.ingredients.length} ingredients
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SavedCard;
