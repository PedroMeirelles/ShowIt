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
    height: 300,
    width: 300,
  },
  cardInfoBox: {
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    marginTop: 50,
  },
  inputLargeBox: {
    backgroundColor: "#D48015",
    width: 309,
    height: 32,
    borderRadius: 7,
    marginTop: 10,
  },
  largeInput: {
    height: 32,
    width: 309,
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
  },
  inputSmallBox: {
    flexDirection: "row",
    height: 32,
    width: 309,
    justifyContent: "space-between",
    top: 10,
    marginBottom: 10,
  },
  inputSmall: {
    backgroundColor: "#D48015",
    height: 32,
    width: 130,
    borderRadius: 7,
    textAlign: "center",
    fontSize: 16,
  },
  buyButtonBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
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
