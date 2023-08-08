import { useState, useEffect } from "react";
import { SafeAreaView, Text, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import WelcomeSearch from "../../components/home/welcome/WelcomeSearch";
import Products from "../../components/home/products/Products";
import Featured from "../../components/home/featured/Featured";


const Home = ({navigation}) => {
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState('')
  

  return (
    <SafeAreaView style={{ flex: 1, marginTop:StatusBar.currentHeight,padding:10}}>
      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
        <WelcomeSearch setSearch={setSearch} setActiveFilter={setActiveFilter} activeFilter={activeFilter}/>
        <Featured navigation={navigation}/>
        <Products search={search} activeFilter={activeFilter} navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;