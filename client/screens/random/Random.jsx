import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Animated,
  FlatList,
} from "react-native";
import styles from "./random_style";
import RecipeCard from "../../components/random/RecipeCard";
import { useEffect, useRef, useState } from "react";
import useFetch from "../../hooks/useFetch";
// import { useEffect } from "react";
import { fonts } from "../../constants/fonts";

// const filters = ["Vegan", "Meat", "Gluten Free", "Plant Based", "Spicy"];

const Random = ({ navigation }) => {
  const [data, loading] = useFetch("", "", "", 0);
  const [arbitrary, setArbitrary] = useState(null);
  const [intervalId, setIntervalId] = useState("");
  const [isShuffling, setIsShuffling] = useState(0);
  // const [activeFilter, setActiveFilter] = useState("");
  // const slideAnim = useRef(new Animated.Value(0)).current;

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
      }}
    >
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
          Hold or press a button below to randomize.
        </Text>
      </View>

      {arbitrary && (
        <RecipeCard
          item={arbitrary}
          navigation={navigation}
          isShuffling={isShuffling}
        />
      )}

      <TouchableOpacity
        style={styles.randomButton}
        onPress={() => {
          clearInterval(intervalId);
          setArbitrary(data[Math.round(Math.random() * (data.length - 1))]);
        }}
        onPressIn={() => {
          clearInterval(intervalId);
          setIntervalId(
            setInterval(() => {
              setArbitrary(data[Math.round(Math.random() * (data.length - 1))]);

              setIsShuffling((prev) => (prev < 80 ? prev + 3 : prev));
            }, 100)
          );
        }}
        onPressOut={() => {
          setIsShuffling(0);
          clearInterval(intervalId);
        }}
      >
        <Text style={{ fontSize: 18, color: "white" }}>Hold and release!</Text>
      </TouchableOpacity>

      {/* <FlatList
        data={filters}
        style={{
          position: "absolute",
          bottom: "10%",
          // backgroundColor: "red",
          paddingTop: 20,
          paddingBottom: 20,
          margin: 10,
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.filterTab(activeFilter === item)}
            onPress={() =>
              activeFilter === item
                ? setActiveFilter("")
                : setActiveFilter(item)
            }
          >
            <Text style={styles.filterTabText(activeFilter === item)}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        horizontal
        contentContainerStyle={{ columnGap: 10 }}
        showsHorizontalScrollIndicator={false}
      /> */}
    </SafeAreaView>
  );
};

export default Random;
