import { StyleSheet } from "react-native";
import { fonts } from "../../constants/fonts";

const styles = StyleSheet.create({
  formContainer: {
    // height: 200,
    padding: 10,
    backgroundColor: "#d6d6d6",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -50,
    paddingTop: 50,
    paddingBottom: 100,
  },

  formLabel: {
    fontSize: 16,
    fontFamily: fonts.medium,
    marginBottom: -7,
    zIndex: 10,
    backgroundColor: "#d6d6d6",
    alignSelf: "flex-start",
    marginLeft: 10,
    padding: 3,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
  },

  formInput: (isEmpty) => ({
    backgroundColor: isEmpty ? "red" : "white",
    borderRadius: 5,
    padding: 7,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 12,
  }),

  filterTab: (activeFilters) => ({
    padding: 10,
    backgroundColor: activeFilters ? "grey" : "#f2f2f2",
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
  }),

  dotStyle: (isSelected) => ({
    width: 16,
    aspectRatio: 1 / 1,
    borderWidth: 1,
    borderColor: isSelected ? "transparent" : "grey",
    backgroundColor: isSelected ? "#5DD9C1" : "transparent",
    borderRadius: 500,
  }),
});

export default styles;
