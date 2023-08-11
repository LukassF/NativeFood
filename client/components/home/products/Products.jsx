import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useFetch from "../../../hooks/useFetch";
import { useEffect } from "react";
import styles from "./products_styles";
import ProductCard from "./ProductCard";
import { fonts } from "../../../constants/fonts";

export default function Products({ search, activeFilter, navigation }) {
  const [fetchData, loading] = useFetch("get", search, activeFilter, "", 0, "");

  return (
    <View style={styles.productsContainer}>
      <Text style={{ fontSize: 18, fontFamily: fonts.bold }}>
        Chosen for you!
      </Text>

      <View style={{ rowGap: 10, paddingTop: 20, paddingBottom: 90 }}>
        {loading ? (
          <ActivityIndicator size={"large"} />
        ) : fetchData ? (
          fetchData.length > 0 ? (
            fetchData.map((item, i) => (
              <ProductCard
                fetchedData={item}
                key={item._id}
                navigation={navigation}
              />
            ))
          ) : (
            <Text>No results</Text>
          )
        ) : (
          <Text>No results</Text>
        )}
      </View>
    </View>
  );
}
