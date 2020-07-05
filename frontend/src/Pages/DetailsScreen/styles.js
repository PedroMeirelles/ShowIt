import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F2E2E",
    flexDirection: "column",
  },
  titleBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  descriptionHead: {
    color: "#D48015",
    fontSize: 24,
    marginRight: 15,
  },
  description: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  descriptionText: {
    fontSize: 16,
    color: "white",
    textAlign: "justify",
    padding: 10,
  },
  iconsBox: {
    marginTop: 50,
  },
  dataBox: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 20,
    marginBottom: 25,
  },
  dataTextBox: {
    marginLeft: 10,
    marginTop: 5,
  },
  dataText: {
    color: "#fff",
    fontSize: 14,
  },
  buttonBox: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buyButton: {
    backgroundColor: "#605E5C",
    borderRadius: 7,
    height: 40,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
});
