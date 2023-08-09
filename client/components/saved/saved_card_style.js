import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  savedCard: (index) => ({
    marginTop: index % 2 !== 0 ? 50 : 0,
    // backgroundColor: "rgba(210,210,210, 0.7)",
    paddingTop: 10,
    width: "48.5%",
    height: 250,
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "flex-end",
    // alignItems: "center",
  }),

  saveCardImage: {
    height: "40%",
    // width: "100%",
    aspectRatio: 1 / 1,
    borderRadius: 500,
    overflow: "hidden",
    position: "absolute",
    alignSelf: "center",
    top: 10,
    zIndex: 10,
  },

  saveCardContent: {
    height: "80%",
    backgroundColor: "rgb(234, 234, 234)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // padding: 10,
    paddingTop: "35%",
  },

  saveButton: {
    position: "absolute",
    right: 0,
    top: 0,
    width: 30,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
  },

  saveImage: (saved) => ({
    width: saved ? "100%" : "80%",
    height: saved ? "100%" : "80%",
    tintColor: saved ? "rgba(255, 79, 79,0.6)" : "rgba(0,0,0,0.6)",
  }),

  starImage: (difficulty) => ({
    width: 15,
    aspectRatio: 1 / 1,
    margin: 1,
    tintColor: difficulty ? "#e0d726" : "#c4c2c2",
  }),
});

export default styles;
