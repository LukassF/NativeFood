import { useState, useEffect } from "react";
import { SafeAreaView, Text, StatusBar, ScrollView } from "react-native";
import WelcomeSearch from "../../components/home/welcome/WelcomeSearch";
import Products from "../../components/home/products/Products";
import Featured from "../../components/home/featured/Featured";

const Home = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  navigation.addListener("focus", () => {
    setIsLoaded(true);
  });
  navigation.addListener("blur", () => {
    setIsLoaded(false);
  });

  return (
    <SafeAreaView
      style={{ flex: 1, marginTop: StatusBar.currentHeight, padding: 10 }}
    >
      {isLoaded && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <WelcomeSearch
            setSearch={setSearch}
            setActiveFilter={setActiveFilter}
            activeFilter={activeFilter}
          />
          <Featured navigation={navigation} />
          <Products
            search={search}
            activeFilter={activeFilter}
            navigation={navigation}
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Home;
