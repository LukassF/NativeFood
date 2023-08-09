import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  randomButton: {
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: "#1c1c1c",
    borderRadius: 500,
    position: "absolute",
    // bottom: 100,
    bottom: "27%",
    zIndex: 100,
  },

  recipeCard: (isShuffling) => ({
    width: 300 - isShuffling,
    borderRadius: 20,
    aspectRatio: 1 / 1,
    overflow: "hidden",
    marginTop: -200,
    zIndex: 200,
  }),

  titleView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: 20,
    zIndex: 60,
    // backgroundColor
  },

  // filterTab: (activeFilter) => ({
  //   padding: 15,
  //   paddingLeft: 20,
  //   paddingRight: 20,
  //   borderRadius: 500,
  //   backgroundColor: activeFilter ? "white" : "#565656",
  // }),
  // filterTabText: (activeFilter) => ({
  //   color: activeFilter ? "black" : "white",
  //   fontSize: 18,
  // }),
});

export default styles;
