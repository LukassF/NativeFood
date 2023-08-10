import React, { useEffect, useRef } from "react";
import {
  Dimensions,
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import styles from "../../screens/random/random_style";
import { fonts } from "../../constants/fonts";
import { LinearGradient } from "expo-linear-gradient";

const RecipeCard = ({ item, navigation, changed, animationLength }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial
  const slide = useRef(new Animated.Value(0)).current;
  const fadeBackground = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: animationLength,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: animationLength,
        useNativeDriver: true,
      }),
    ]).start();

    Animated.sequence([
      Animated.timing(fadeBackground, {
        toValue: 0,
        duration: animationLength,
        useNativeDriver: true,
      }),
      Animated.timing(fadeBackground, {
        toValue: 1,
        duration: animationLength,
        useNativeDriver: true,
      }),
    ]).start();

    Animated.timing(slide, {
      toValue: -350,
      duration: animationLength,
      useNativeDriver: true,
    }).start(() => {
      slide.setValue(350);
      Animated.timing(slide, {
        toValue: 0,
        duration: animationLength,
        useNativeDriver: true,
      }).start();
    });
  }, [changed]);
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
      <Animated.Image
        style={{ ...StyleSheet.absoluteFillObject, opacity: fadeBackground }}
        source={{ uri: item.image }}
        blurRadius={50}
      ></Animated.Image>

      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [
            {
              translateX: slide,
            },
            {
              scale: fadeAnim.interpolate({
                inputRange: [0.2, 1],
                outputRange: [0.3, 1],
              }),
            },
          ],
        }}
      >
        <TouchableOpacity
          style={styles.recipeCard}
          onPress={() => navigation.navigate("Details", { _id: item._id })}
        >
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.8)"]}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
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
      </Animated.View>
    </View>
  );
};

export default RecipeCard;
