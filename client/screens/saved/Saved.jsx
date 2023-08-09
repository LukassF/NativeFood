import {
  ActivityIndicator,
  Image,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";
import SavedCard from "../../components/saved/SavedCard";
import { fonts } from "../../constants/fonts";
import { useState } from "react";

const Saved = ({ navigation }) => {
  const savedRecipies = useSelector((state) => state.savedRecipies);
  const [savedRecipiesData, loading] = useFetch("", "", savedRecipies, 0);

  return (
    <ScrollView
      style={{ flex: 1, marginTop: StatusBar.currentHeight, padding: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={{ fontSize: 20, fontFamily: fonts.bold, marginBottom: 10 }}>
        Saved Recipies
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: "#9b9b9b",
          fontFamily: fonts.medium,
          // fontWeight: 900,
          marginBottom: 30,
        }}
      >
        Persist your favourite recipies and come back to them whenever you wish
        to! Just click on the "Save" icon located on the product card. To remove
        an item from this list, pres the button once again.
      </Text>
      <View
        style={{
          rowGap: -30,
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          paddingBottom: 100,
        }}
      >
        {loading ? (
          <ActivityIndicator
            size={"large"}
            style={{ alignSelf: "center", width: "100%" }}
          />
        ) : savedRecipiesData.length !== 0 ? (
          savedRecipiesData.map((recipe, i) => (
            <SavedCard
              fetchedData={recipe}
              index={i}
              key={recipe._id}
              navigation={navigation}
            />
          ))
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              minHeight: 200,
            }}
          >
            <Text>Nothing saved yet</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Saved;
