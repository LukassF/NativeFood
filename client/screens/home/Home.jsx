import { useState, useEffect } from "react";
import { SafeAreaView, Text, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import WelcomeSearch from "../../components/home/welcome/WelcomeSearch";
import Products from "../../components/home/products/Products";
import Featured from "../../components/home/featured/Featured";


const Home = () => {
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState('')
  

  return (
    <SafeAreaView style={{ flex: 1, marginTop:StatusBar.currentHeight,padding:10}}>
      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
        <WelcomeSearch setSearch={setSearch} setActiveFilter={setActiveFilter} activeFilter={activeFilter}/>
        <Featured />
        <Products search={search} activeFilter={activeFilter}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;