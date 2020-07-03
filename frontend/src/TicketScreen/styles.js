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
});
