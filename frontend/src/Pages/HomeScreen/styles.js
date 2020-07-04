import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F2E2E",
    flexDirection: "column",
  },
  headerBox: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  header: {
    marginTop: 80,
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "#D48015",
    borderRadius: 7,
    height: 32,
    width: 309,
  },
  inputSearch: {
    height: 32,
    width: 278,
    backgroundColor: "#D48015",
    borderRadius: 7,
    color: "white",
    fontSize: 18,
    paddingLeft: 7,
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
  flatlistBox: {
    alignItems: "center",
  },
  flatlist: {
    backgroundColor: "rgba(255, 255, 255, 0.65)",
    borderRadius: 7,
    alignItems: "center",
    height: 200,
    width: 300,
    marginTop: 20,
  },
  flatlistName: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 5,
  },
  flatlistInfo: {
    flexDirection: "row",
  },
});
