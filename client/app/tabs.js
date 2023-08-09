import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/home/Home";

import { Image, StyleSheet, View, Text } from "react-native";
import icons from "../constants/icons";
import Saved from "../screens/saved/Saved";
import Random from "../screens/random/Random";
import Add from "../screens/add/Add";

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
        name="Saved"
        component={Saved}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tab}>
              <Image
                source={icons.saveIconOutline}
                style={{ ...styles.tabBtn(focused), width: 22, height: 22 }}
              />
              <Text style={styles.tabText(focused)}>Saved</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Browse"
        component={Add}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tab}>
              <Image
                source={icons.add}
                style={{ ...styles.tabBtn(focused), width: 27 }}
              />
              <Text style={styles.tabText(focused)}>Add</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Random}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tab}>
              <Image
                source={icons.random}
                style={{ ...styles.tabBtn(focused), width: 25 }}
              />
              <Text style={styles.tabText(focused)}>Random</Text>
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
    tintColor: focused ? "#5DD9C1" : "#50514F",
  }),
  tabText: (focused) => ({
    color: focused ? "#5DD9C1" : "#50514F",
    fontSize: 12,
    fontWeight: focused ? 900 : 400,
  }),
  tab: {
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 4,
  },
});
