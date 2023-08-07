import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import icons from "../../../constants/icons";
import styles from "./welcome_styles";
import { useEffect, useState } from "react";

const filters = ["Vegan", "Sweet", "Gluten Free", "Plant Based"];

export default function WelcomeSearch({ setSearch, setActiveFilter, activeFilter }) {
  const [date, setDate] = useState(new Date());
 
  const [localSearch, setLocalSearch] = useState("");

  useEffect(() => {
    let intervalID = setInterval(() => {
      // console.log(new Date())
      setDate(new Date());
    }, 1000);
  }, []);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "stretch",
          justifyContent: "space-between",
          paddingLeft: 5,
          paddingRight: 5,
        }}
      >
        <View>
          <Text style={{ fontSize: 20, fontWeight: 900 }}>Welcome Łukasz!</Text>
          <Text style={{ fontSize: 12 }}>What are we eating today?</Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "flex-end" }}>
          <Text style={{ fontSize: 10 }}>{date.toDateString()}</Text>
          <Text style={{ fontSize: 10 }}>
            {date.getHours().toString().padStart(2, "0")}:
            {date.getMinutes().toString().padStart(2, "0")}
          </Text>
        </View>
      </View>
      <View style={styles.searchView}>
        <TextInput
          style={styles.searchInput}
          onChangeText={setLocalSearch}
          placeholder="Whatever you wish!"
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => setSearch(localSearch)}
        >
          <Image
            style={{ width: 20, height: 20, tintColor: "#ffffff" }}
            source={icons.browse}
          />
        </TouchableOpacity>
      </View>
      <FlatList 
      data={filters} 
      renderItem={({item}) => (
        <TouchableOpacity style={styles.filterTab(activeFilter === item)} onPress={() => setActiveFilter(item)}>
          <Text style={styles.filterTabText(activeFilter === item)}>{item}</Text>
        </TouchableOpacity>
        )} 
        keyExtractor={item => item}
        horizontal
        contentContainerStyle={{columnGap:10}}
        
        />
    </View>
  );
}
