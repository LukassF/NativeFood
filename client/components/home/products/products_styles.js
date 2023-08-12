import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  productsContainer: {
    flex: 1,
    // backgroundColor: "red",
    minHeight: 200,
    paddingBottom: 10,
    paddingTop: 10,
  },

  productCard: {
    width: "100%",
    padding: 10,
    // height: 30,
    backgroundColor: "#eaeaea",
    borderRadius: 20,
    // borderColor: "#c6c6c6",
    // borderWidth: 2,
    flexDirection: "row",
    gap: 15,
  },

  imageContainer: {
    width: 90,
    aspectRatio: 1 / 1,
    borderRadius: 500,
    overflow: "hidden",
    // shadowColor: "#000000",
    // shadowOffset: {
    //   width: 0,
    //   height: 10,
    // },
    // shadowRadius: 3.5,
    // shadowOpacity: 0.25,
    // elevation: 5,
  },

  content: {
    justifyContent: "flex-start",
    alignItems: "stretch",
    flex: 1,
    // backgroundColor: "blue",
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
});

export default styles;
