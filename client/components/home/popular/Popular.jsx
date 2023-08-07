import { ActivityIndicator, Text, View } from "react-native"
import useFetch from "../../../hooks/useFetch"
import { useEffect } from "react"

export default function Popular({search, activeFilter}) {
    const [fetchData,loading] = useFetch(search)
    console.log(activeFilter)
    useEffect(() => {
        // console.log(fetchData)
    },[search])
  return (
    <View>
        {loading ? <ActivityIndicator size={"large"}/> : 
        fetchData.length !== 0 ?
        fetchData.map(product => (
            <Text>{product ? product.name : ''}</Text>
        ))
        :
        <Text>No results</Text>
        }
       
    </View>
  )
}
