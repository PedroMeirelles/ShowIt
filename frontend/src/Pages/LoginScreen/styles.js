import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F2E2E",
    flexDirection: "column",
  },
  imageBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 50,
  },
  inputBox: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  inputBack: {
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "#D48015",
    height: 32,
    width: 309,
    borderRadius: 7,
    marginTop: 20,
  },
  input: {
    backgroundColor: "#D48015",
    borderRadius: 7,
    width: 278,
    fontSize: 16,
    paddingLeft: 15,
  },
  forgotPass: {
    marginTop: 7,
    flexDirection: "row",
    justifyContent: "flex-end",
    width: 309,
  },
  buttonBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 25,
  },
  button: {
    backgroundColor: "#605E5C",
    borderRadius: 7,
    height: 40,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
});
