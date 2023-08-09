import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";
import useFetch from "../../hooks/useFetch";
import { ScrollView } from "react-native";
import styles from "./details_style";
import icons from "../../constants/icons";
import DetailsHeader from "../../components/details/DetailsHeader";
import { DetailsIngredients } from "../../components/details/DetailsIngredients";
import { DetailsPreparation } from "../../components/details/DetailsPreparation";
import { TouchableOpacity } from "react-native-gesture-handler";

function ProductDetails({ route }) {
  const id = route.params._id;
  const [details, loading] = useFetch("", "", id, 0);
  const [difficultyArray, setDifficultyArray] = useState([]);

  useEffect(() => {
    // console.log(details);
    if (details[0])
      setDifficultyArray(
        new Array(details[0].difficulty)
          .fill(1)
          .concat(new Array(5 - details[0].difficulty).fill(0))
      );
  }, [details]);
  return (
    <>
      {loading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <>
          <View style={styles.detailsImageContainer}>
            <Image
              source={{ uri: details[0].image }}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
            />
          </View>
          <ScrollView
            contentContainerStyle={{
              alignItems: "center",
            }}
            showsVerticalScrollIndicator={false}
          >
            <View style={{ width: "100%", height: 200 }}></View>
            {details && (
              <View style={styles.contentView}>
                <DetailsHeader details={details[0]} />
                <DetailsIngredients details={details[0]} />
                <DetailsPreparation details={details[0]} />

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 6,
                    padding: 10,
                    marginTop: 30,
                    borderRadius: 10,
                    borderColor: "#e2e2e2",
                    borderWidth: 1,
                  }}
                >
                  <Text style={{ marginRight: 10 }}>Difficulty:</Text>
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
              </View>
            )}
          </ScrollView>
        </>
      )}
    </>
  );
}

export default ProductDetails;
