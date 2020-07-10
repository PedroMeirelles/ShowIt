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
  headerBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  headerName: {
    fontSize: 26,
    color: "#fff",
    right: 10,
  },
  iconsBox: {
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginLeft: 20,
  },
  dataBox: {
    flexDirection: "row",
  },
  dataTextBox: {
    marginTop: 4,
    marginLeft: 5,
  },
  localBox: {
    flexDirection: "row",
    marginTop: 20,
  },
  qrCode: {
    alignItems: "center",
    marginTop: 20,
  },
  iconsBox2: {
    marginTop: 50,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconText: {
    flexDirection: "column",
    alignItems: "center",
  },
});
