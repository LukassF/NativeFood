import React from "react";
import styles from "../../screens/details/details_style";
import icons from "../../constants/icons";
import { Image, Text, Vie, TouchableOpacity, View } from "react-native";
import { fonts } from "../../constants/fonts";

import { useDispatch, useSelector } from "react-redux";
import { saveRecipe, reset, removeFromSaved } from "../../app/redux/slice";

function DetailsHeader({ details }) {
  const dispatch = useDispatch();
  const savedRecipies = useSelector((state) => state.savedRecipies);

  const saved = savedRecipies.find((item) => item === details._id);
  return (
    <>
      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => {
          dispatch(
            !saved ? saveRecipe(details._id) : removeFromSaved(details._id)
          );
        }}
      >
        <Image
          source={saved ? icons.saveIconFilled : icons.saveIconOutline}
          style={styles.saveImage(saved)}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          fontFamily: fonts.bold,
        }}
        numberOfLines={1}
      >
        {details.name}
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: 14,
          fontFamily: fonts.medium,
          color: "#9b9b9b",
        }}
        numberOfLines={1}
      >
        {details.subtitle}
      </Text>
      <View
        style={{
          flexDirection: "row-reverse",
          padding: 10,
          paddingTop: 20,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            marginTop: 10,
          }}
        >
          <Image source={icons.clock} style={{ width: 14, height: 14 }} />
          <Text style={{ fontSize: 14 }}>
            {Math.floor(details.time / 60) !== 0
              ? Math.floor(details.time / 60) + "h "
              : ""}
            {details.time % 60 !== 0 ? (details.time % 60) + "min" : ""}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          {details.adjectives.map((adjective, i) => (
            <View
              key={i}
              style={styles.adjectiveImageContainer(
                icons[adjective.split(" ").join("")].color
              )}
            >
              <Image
                source={icons[adjective.split(" ").join("")].icon}
                style={styles.adjectiveImage}
              ></Image>
            </View>
          ))}
        </View>
      </View>
    </>
  );
}

export default DetailsHeader;
