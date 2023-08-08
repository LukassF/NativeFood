import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native"
import useFetch from "../../../hooks/useFetch"
import { useEffect } from "react"
import styles from "./products_styles"
import ProductCard from "./ProductCard"

export default function Products({search, activeFilter,navigation}) {
    const [fetchData,loading] = useFetch(search,activeFilter,"",0)

  return (
    <View style={styles.productsContainer}>
      <Text style={{ fontSize: 18, fontWeight: 900, }}>Chosen for you!</Text>

     <View style={{rowGap:10, paddingTop:20, paddingBottom:90}}>
      {loading ? <ActivityIndicator size={"large"} /> : fetchData ? fetchData.map((item,i) => (
        <ProductCard fetchedData={item} key={item._id} navigation={navigation}/>
      )):<Text>No results</Text>}
     </View>

        {/* {loading ? <ActivityIndicator size={"large"}/> : 
        fetchData.length !== 0 ?
        fetchData.map(product => (
            <Text>{product ? product.name : ''}</Text>
        ))
        :
        <Text>No results</Text>
        }
        */}
    </View>
  )
}
