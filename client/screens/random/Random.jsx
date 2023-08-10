import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import styles from "./random_style";
import RecipeCard from "../../components/random/RecipeCard";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
// import { useEffect } from "react";
import { fonts } from "../../constants/fonts";
import icons from "../../constants/icons";

const filters = [
  "Vegan",
  "Meat",
  "Gluten Free",
  "Plant Based",
  "Spicy",
  "Sweet",
];

const Random = ({ navigation }) => {
  const [activeFilter, setActiveFilter] = useState("");
  const [data, loading] = useFetch("", activeFilter, "", 0);
  const [arbitrary, setArbitrary] = useState(null);
  // const [intervalId, setIntervalId] = useState("");
  const [changed, setChanged] = useState(false);
  const [animationLength, setAnimationLength] = useState(300);

  // console.log(icons[filters[0]]);

  useEffect(() => {
    if (data) setArbitrary(data[Math.round(Math.random() * (data.length - 1))]);
  }, [data]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
        paddingTop: 10,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        overflow: "hidden",
        // backgroundColor: "rgb(100,100,100)",
      }}
    >
      <Image
        source={{
          uri: "https://static.nationalgeographic.co.uk/files/styles/image_3200/public/tryitnow_GettyImages-1127515284_HR.jpg?w=1600&h=900",
        }}
        style={{ ...StyleSheet.absoluteFillObject }}
        blurRadius={50}
      />
      <View
        style={{
          position: "absolute",
          zIndex: 100,
          top: 20,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontFamily: fonts.bold,
            color: "white",
          }}
        >
          Get a random recipe!
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontFamily: fonts.medium,
            color: "lightgrey",
          }}
        >
          Press a button below to randomize.
        </Text>
      </View>

      {arbitrary && (
        <RecipeCard
          item={arbitrary}
          navigation={navigation}
          changed={changed}
          animationLength={animationLength}
        />
      )}

      <TouchableOpacity
        style={styles.randomButton}
        onPress={() => {
          let timeoutId;

          clearTimeout(timeoutId);
          setAnimationLength(300);
          setChanged((prev) => !prev);
          timeoutId = setTimeout(() => {
            setArbitrary(data[Math.round(Math.random() * (data.length - 1))]);
          }, 300);
        }}
      >
        <Text style={{ fontSize: 18, color: "white" }}>Press and eat!</Text>
      </TouchableOpacity>

      <FlatList
        data={filters}
        style={{
          position: "absolute",
          bottom: "10%",
          paddingTop: 20,
          paddingBottom: 20,
          margin: 10,
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.filterButton(activeFilter === item)}
              onPress={() => setActiveFilter(activeFilter === item ? "" : item)}
            >
              <Image
                source={icons[item.split(" ").join("")].icon}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: activeFilter === item ? "black" : "white",
                }}
              ></Image>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item}
        horizontal
        contentContainerStyle={{ columnGap: 10 }}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Random;
