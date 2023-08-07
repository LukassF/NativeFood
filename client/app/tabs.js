import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/home/Home";
import Cart from "../screens/cart/Cart";
import Browse from "../screens/browse/Browse";
import Account from "../screens/account/Account";
import { Image, StyleSheet, View, Text } from "react-native";
import icons from "../constants/icons";
import HeaderBtn from "../components/header/headerBtn";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#ffffff",
          height: 70,
          bottom: 10,
          left: 10,
          right: 10,
          borderRadius: 12,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tab}>
              <Image source={icons.home} style={styles.tabBtn(focused)} />
              <Text style={styles.tabText(focused)}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tab}>
              <Image source={icons.cart} style={styles.tabBtn(focused)} />
              <Text style={styles.tabText(focused)}>Cart</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Browse"
        component={Browse}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tab}>
              <Image source={icons.browse} style={styles.tabBtn(focused)} />
              <Text style={styles.tabText(focused)}>Browse</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tab}>
              <Image source={icons.account} style={styles.tabBtn(focused)} />
              <Text style={styles.tabText(focused)}>Account</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
  tabBtn: (focused) => ({
    width: 20,
    height: 20,
    tintColor: focused ? "#70587C" : "#50514F",
  }),
  tabText: (focused) => ({
    color: focused ? "#70587C" : "#50514F",
    fontSize: 12,
    fontWeight: focused ? 900 : 400,
  }),
  tab: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
});
