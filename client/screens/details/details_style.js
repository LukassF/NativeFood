import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  detailsImageContainer: {
    width: "100%",
    height: 250,
    overflow: "hidden",
    position: "absolute",
  },

  contentView: {
    backgroundColor: "rgb(239, 239, 239)",
    padding: 10,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 30,
  },

  adjectiveImageContainer: (icon) => ({
    padding: 7,
    borderRadius: 500,
    backgroundColor: icon,
    opacity: 0.7,
  }),

  adjectiveImage: {
    width: 12,
    height: 12,
    // backgroundColor: icon.color,
    tintColor: "white",
  },
  starImage: (difficulty) => ({
    width: 15,
    aspectRatio: 1 / 1,
    tintColor: difficulty ? "#e0d726" : "#c4c2c2",
  }),

  saveButton: {
    position: "absolute",
    right: 10,
    top: -60,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 500,
    padding: 10,
    zIndex: 20,
  },

  saveImage: (saved) => ({
    width: saved ? "100%" : "80%",
    height: saved ? "100%" : "80%",
    tintColor: saved ? "rgba(255, 79, 79,0.6)" : "rgba(0,0,0,0.6)",
  }),
});

export default styles;
