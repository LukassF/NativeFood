import React, { useEffect } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";
import useFetch from "../../hooks/useFetch";
import { ScrollView } from "react-native";
import styles from "./details_style";

function ProductDetails({ route }) {
  const id = route.params._id;
  const [details, loading] = useFetch("", "", id, 0);

  // useEffect(() => {
  //     if(details.preparation)
  //     console.log(details.preparation)
  // },[details])
  return (
    <>
      {loading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <>
          <View style={styles.detailsImageContainer}>
            <Image
              source={{ uri: details.image }}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
            />
          </View>
          <ScrollView
            contentContainerStyle={{
              // padding: 20,
              alignItems: "center",
              //   rowGap: 5,
            }}
          >
            <View style={{ width: "100%", height: 200 }}></View>
            <View style={styles.contentView}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: 800,
                }}
                numberOfLines={1}
              >
                {details.name}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 14,
                  fontWeight: 800,
                  color: "#9b9b9b",
                }}
                numberOfLines={1}
              >
                {details.subtitle}
              </Text>
              {/* <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                perspiciatis asperiores. Illum doloremque reiciendis molestiae
                doloribus culpa! Aut deserunt nobis numquam maxime fuga
                suscipit, libero cum, voluptatem molestiae eveniet nulla. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Doloremque
                quam aliquid temporibus velit asperiores omnis earum
                repudiandae, perspiciatis eius fuga minus atque repellat
                suscipit modi maxime distinctio aperiam possimus. Molestias!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                repellat, ratione reiciendis, porro adipisci saepe voluptates
                maiores fuga iusto inventore veniam asperiores fugiat, a dolore
                dolores. Alias, commodi facilis? Officia. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Deleniti earum beatae animi
                perferendis ipsum eligendi! Repellat, ab. Temporibus excepturi,
                quis repellendus aliquam a quaerat porro deleniti, hic vel
                assumenda doloremque. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Eius consequuntur odio, laborum aliquam magni
                eveniet consequatur fugit ex corrupti. Aperiam totam aut velit
                iure ab iste placeat eum! Maxime, corporis. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Laborum debitis sit eos
                quos aperiam blanditiis fugiat a veritatis quod doloribus!
                Adipisci vitae maxime a dolor quaerat voluptatibus? Libero, fuga
                beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Velit, ipsam voluptates neque dolorem et a dolorum enim adipisci
                qui repudiandae aperiam necessitatibus dolores architecto esse
                veniam quis rem cupiditate praesentium. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Libero perferendis rerum
                magnam. Dolorem deleniti, atque quis odio magnam, magni ducimus
                eveniet perspiciatis amet quibusdam nostrum debitis excepturi
                deserunt enim dolorum. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Assumenda suscipit molestiae voluptas alias
                quo impedit placeat. Vero quas iure laboriosam aspernatur
                nostrum quod soluta, adipisci, reiciendis aperiam aut, ullam
                dolorum!
              </Text> */}
            </View>
          </ScrollView>
        </>
      )}
    </>
  );
}

export default ProductDetails;
