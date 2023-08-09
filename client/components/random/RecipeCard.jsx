import React from "react";
import {
  Dimensions,
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import styles from "../../screens/random/random_style";
import { fonts } from "../../constants/fonts";
import { LinearGradient } from "expo-linear-gradient";

const RecipeCard = ({ item, navigation, isShuffling }) => {
  // console.log(isShuffling);
  return (
    <View
      style={{
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        style={{
          position: "absolute",
          width: "100%",
          height: "40%",
          left: 0,
          top: 0,
          zIndex: 100,
        }}
      ></LinearGradient>
      <Image
        style={StyleSheet.absoluteFillObject}
        source={{ uri: item.image }}
        blurRadius={50}
      ></Image>
      <TouchableOpacity
        style={styles.recipeCard(isShuffling)}
        onPress={() => navigation.navigate("Details", { _id: item._id })}
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            // backgroundColor: "red",
            zIndex: 50,
            left: 0,
            top: 0,
          }}
        ></LinearGradient>
        <Image
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
          source={{ uri: item.image }}
        ></Image>
        <View style={styles.titleView}>
          <Text
            style={{
              color: "white",
              fontSize: 22,
              fontFamily: fonts.bold,
            }}
            numberOfLines={3}
          >
            {item.name}
          </Text>
          <Text
            style={{
              color: "lightgrey",
              fontSize: 15,
              fontFamily: fonts.medium,
            }}
            numberOfLines={2}
          >
            {item.subtitle}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RecipeCard;
