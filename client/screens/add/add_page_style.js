import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 5,

    // height: 200,
    // backgroundColor: "red",
    padding: 15,
    gap: 20,
  },
  buttonSave: {
    width: "5%",
    aspectRatio: 1 / 1,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
    borderRadius: 500,
  },
  imagePreview: {
    width: 150,
    height: 150,
    borderRadius: 500,
    overflow: "hidden",
  },
});

export default styles;
