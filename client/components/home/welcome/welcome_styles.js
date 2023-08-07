import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  searchView: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
    flexDirection: "row",
    height: 85,
    justifyContent: "center",
    alignItems: "stretch",
    gap: 10,
  },
  searchButton: {
    borderRadius: 10,
    aspectRatio: 1 / 1,
    backgroundColor: "#5DD9C1",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 3.5,
    shadowOpacity: 0.25,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    fontSize: 16,
    paddingLeft: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 3.5,
    shadowOpacity: 0.25,
    elevation: 5,
  },
  filterTab: (activeFilter) => ({
    padding: 10,
    borderRadius: 16,
    backgroundColor: activeFilter ? "#5DD9C1" : "#e2e2e2",
  }),
  filterTabText: (activeFilter) => ({
    color: activeFilter ? "white" : "black",
  }),
});

export default styles;
