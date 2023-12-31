import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./featured_styles";
import icons from "../../../constants/icons";

export default function FeaturedCard({ featuredData, navigation }) {
  const difficultyArray = new Array(featuredData.difficulty)
    .fill(1)
    .concat(new Array(5 - featuredData.difficulty).fill(0));
  return (
    <TouchableOpacity
      style={styles.featuredCard}
      onPress={() => navigation.navigate("Details", { _id: featuredData._id })}
    >
      <View style={styles.cardImage}>
        <Image
          source={{ uri: featuredData.image }}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={styles.cardContent}>
        <Text
          style={{ textAlign: "center", fontSize: 16, fontWeight: 600 }}
          numberOfLines={1}
        >
          {featuredData.name}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 12,
            fontWeight: 600,
            color: "#9b9b9b",
            marginBottom: 10,
          }}
          numberOfLines={1}
        >
          {featuredData.subtitle}
        </Text>
        <Text style={{ textAlign: "center", fontSize: 8, color: "#9b9b9b" }}>
          Difficulty
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 10,
            paddingTop: 2,
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
      </View>
    </TouchableOpacity>
  );
}
