import React from "react";
import { Text, View } from "react-native";
import { fonts } from "../../constants/fonts";

export const DetailsPreparation = ({ details }) => {
  return (
    <View style={{ marginTop: 10, padding: 10 }}>
      <Text
        style={{ fontSize: 16, fontFamily: fonts.medium, marginBottom: 10 }}
      >
        Preparation
      </Text>

      <View style={{ rowGap: 10 }}>
        {details.preparation.map((instruction, i) => (
          <Text
            key={i}
            style={{
              color: "#707070",
              paddingLeft: 10,
              fontFamily: fonts.light,
            }}
          >
            {i + 1}. {instruction}
          </Text>
        ))}
      </View>
    </View>
  );
};
