// import { Stack } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, Text } from "react-native";
import MyTabs from "./tabs";
import { createStackNavigator } from "@react-navigation/stack";
import ProductDetails from "../screens/details/ProductDetails";

const Stack = createStackNavigator();

const Layout = () => {
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

export default Layout;
