import React from "react";
import { Image, Text, View } from "react-native";
import icons from "../../constants/icons";
import { fonts } from "../../constants/fonts";

export const DetailsIngredients = ({ details }) => {
  return (
    <View style={{ marginTop: 20, padding: 10 }}>
      <Text
        style={{ fontSize: 16, fontFamily: fonts.medium, marginBottom: 10 }}
      >
        Ingredients
      </Text>

      {details.ingredients.map((ingredient) => (
        <Text
          key={ingredient}
          style={{ color: "#707070", paddingLeft: 10, fontFamily: fonts.light }}
          numberOfLines={1}
        >
          {" "}
          <Image
            source={icons.listPoint}
            style={{ width: 10, height: 10, tintColor: "grey" }}
          />
          {"  "}
          {ingredient}
        </Text>
      ))}
    </View>
  );
};
