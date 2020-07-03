import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F2E2E",
    flexDirection: "column",
  },
  header: {
    marginTop: 80,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  inputSearch: {
    height: 32,
    width: 309,
    backgroundColor: "#D48015",
    borderRadius: 7,
    color: "white",
    fontSize: 18,
    paddingLeft: 10,
  },
  categoryContainer: {
    marginTop: 5,
  },
  categoryBox: {
    flexDirection: "row",
    justifyContent: "center",
  },
  categoryButton: {
    flexDirection: "row",
    height: 24,
    width: 100,
    backgroundColor: "#605E5C",
    borderRadius: 7,
    color: "#fff",
    alignItems: "center",
    paddingTop: 1,
    justifyContent: "center",
    margin: 3,
  },
  textButton: {
    color: "#fff",
    fontSize: 13,
    marginLeft: 5,
  },
  titleBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 24,
  },
  titleEvents: {
    fontSize: 28,
    color: "#fff",
  },
});
