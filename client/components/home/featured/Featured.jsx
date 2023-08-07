import { ActivityIndicator, FlatList, Text, View } from "react-native";
import useFetch from "../../../hooks/useFetch";
import styles from "./featured_styles";
import FeaturedCard from "./FeaturedCard";

export default function Featured() {
  const [featuredData, loading] = useFetch("", "", 4);
  return (
    <View style={styles.featuredContainer}>
      <Text style={{ fontSize: 18, fontWeight: 900, }}>Featured</Text>
      <FlatList
        data={featuredData}
        renderItem={({ item }) => <FeaturedCard featuredData={item}/>}
        keyExtractor={(item) => item._id}
        horizontal
        contentContainerStyle={{ columnGap: 10 }}
        showsHorizontalScrollIndicator={false}
      />
      {/* {loading ? <ActivityIndicator size={"large"}/> : 
        featuredData.length !== 0 ?
        featuredData.map(product => (
            <Text>{product ? product.name : ''}</Text>
        ))
        :
        <Text>No Data</Text>
        } */}
    </View>
  );
}
