import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F2E2E",
    flexDirection: "column",
  },
  logoBox: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 90,
  },
  logo: {
    height: 153,
    width: 153,
  },
  titleBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 8,
  },
  title: {
    color: "#D48015",
    fontSize: 26,
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
