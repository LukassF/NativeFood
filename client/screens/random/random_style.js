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

  recipeCard: {
    // width: 300 - isShuffling,
    width: 300,
    borderRadius: 20,
    aspectRatio: 1 / 1,
    overflow: "hidden",
    marginTop: -200,
    zIndex: 200,
  },

  titleView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: 20,
    zIndex: 60,
    // backgroundColor
  },

  filterButton: (activeFilter) => ({
    width: 55,
    aspectRatio: 1 / 1,
    backgroundColor: activeFilter ? "white" : "#1c1c1c",
    borderRadius: 500,
    justifyContent: "center",
    alignItems: "center",
  }),
});

export default styles;
