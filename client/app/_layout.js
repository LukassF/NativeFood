// import { Stack } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, Text } from "react-native";
import MyTabs from "./tabs";

const Layout = () => {
  return (
    <NavigationContainer independent={true}>
      <MyTabs />
    </NavigationContainer>
  );
};

export default Layout;
