import { ActivityIndicator, FlatList, Text, View } from "react-native";
import useFetch from "../../../hooks/useFetch";
import styles from "./featured_styles";
import FeaturedCard from "./FeaturedCard";

export default function Featured({navigation}) {
  const [featuredData, loading] = useFetch("", "","", 4);
  return (
    <View style={styles.featuredContainer}>
      <Text style={{ fontSize: 18, fontWeight: 900, }}>Featured</Text>
      {loading ? <ActivityIndicator size={"large"}/> :
      featuredData ? <FlatList
        data={featuredData}
        renderItem={({ item }) => <FeaturedCard featuredData={item} navigation={navigation}/>}
        keyExtractor={(item) => item._id}
        horizontal
        contentContainerStyle={{ columnGap: 10 }}
        showsHorizontalScrollIndicator={false}
      />
    :
    <Text style={{textAlign:"center", fontSize:16, marginTop:-10}}>No Data</Text>}
    
    </View>
  );
}
