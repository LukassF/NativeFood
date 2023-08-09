// import { Stack } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import MyTabs from "./tabs";
import { createStackNavigator } from "@react-navigation/stack";
import ProductDetails from "../screens/details/ProductDetails";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const Stack = createStackNavigator();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    JostLight: require("../assets/fonts/Jost-Light.ttf"),
    JostMedium: require("../assets/fonts/Jost-Medium.ttf"),
    JostBold: require("../assets/fonts/Jost-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Landing"
          component={MyTabs}
        />
        <Stack.Screen
          options={{
            headerTitleAlign: "center",
          }}
          name="Details"
          component={ProductDetails}
        />
      </Stack.Navigator>
      {/* <MyTabs /> */}
    </NavigationContainer>
  );
};

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout />
      </PersistGate>
    </Provider>
  );
};
