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
    height: 150,
    width: 150,
  },
  headerBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  textBox: {
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 40,
    alignItems: "center",
  },
  iconsBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    textAlign: "center",
    marginTop: 30,
  },
  iconText: {
    flexDirection: "column",
    alignItems: "center",
  },
});
