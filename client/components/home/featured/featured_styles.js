import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  featuredContainer: {
    flex: 1,
    // backgroundColor: "red",
    paddingBottom: 10,
    paddingTop: 10,
    rowGap: 25,
  },

  featuredCard: {
    width: 150,
    height: 180,
    // backgroundColor: "grey",
    borderRadius: 10,
    overflow: "hidden",
  },

  cardImage: {
    height: "40%",
    aspectRatio: 1 / 1,
    borderRadius: 500,
    overflow: "hidden",
    position: "absolute",
    alignSelf: "center",
    zIndex: 5,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 3.5,
    shadowOpacity: 0.25,
    elevation: 5,
  },

  cardContent: {
    width: "100%",
    height: "80%",
    backgroundColor: "#eaeaea",
    position: "absolute",
    bottom: 0,
    borderRadius: 10,
    justifyContent: "flex-end",
    alignItems: "stretch",
    padding: 10,
  },

  starImage: (difficulty) => ({
    width: 15,
    aspectRatio: 1 / 1,
    tintColor: difficulty ? "#e0d726" : "#c4c2c2",
  }),
});

export default styles;
