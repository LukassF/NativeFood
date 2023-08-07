import { useState, useEffect } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
// import { Stack, useRouter } from "expo-router";
import HeaderBtn from "../components/header/headerBtn";
import icons from "../constants/icons";

const Home = () => {
  //   const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E9D2F4" }}>
      <Text>Hi</Text>
      {/* <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#E9D2F4" },
          headerShadowVisible: false,
          headerTitle: "",
          headerRight: () => <HeaderBtn iconUrl={icons.profile} />,
          headerLeft: () => <HeaderBtn iconUrl={icons.menu} />,
        }}
      /> */}
    </SafeAreaView>
  );
};

export default Home;
