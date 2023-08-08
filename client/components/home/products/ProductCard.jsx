import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./products_styles";
import icons from "../../../constants/icons";
import { useState } from "react";

export default function ProductCard({ fetchedData, navigation }) {
  const [saved, setSaved] = useState(false);

  return (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate("Details", { _id: fetchedData._id })}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: fetchedData.image }}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => setSaved(!saved)}
        >
          <Image
            source={saved ? icons.saveIconFilled : icons.saveIconOutline}
            style={styles.saveImage(saved)}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text
          style={{ fontSize: 16, fontWeight: 600, width: "80%" }}
          numberOfLines={1}
        >
          {fetchedData.name}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: "#9b9b9b",
            width: "80%",
          }}
          numberOfLines={1}
        >
          {fetchedData.subtitle}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            marginTop: 10,
          }}
        >
          <Image source={icons.clock} style={{ width: 12, height: 12 }} />
          <Text style={{ fontSize: 12 }}>
            {Math.floor(fetchedData.time / 60) !== 0
              ? Math.floor(fetchedData.time / 60) + "h "
              : ""}
            {fetchedData.time % 60 !== 0 ? (fetchedData.time % 60) + "min" : ""}
          </Text>
        </View>
        {/* <View style={{flexDirection:'row',marginTop:"auto",justifyContent:'space-between', width:'70%'}} >
                {fetchedData.ingredients.slice(0,3).map((ingredient,i) => (
                    <Text style={{fontSize:12}} key={i}>{ingredient}</Text>
                ))}
                
            </View> */}
      </View>
    </TouchableOpacity>
  );
}
