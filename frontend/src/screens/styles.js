import { StyleSheet, Dimensions } from "react-native";

export const vw = Dimensions.get("window").width;
export const vh = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  //Backgrounds
  imageBackground: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  // Logos
  logoView: {
    width: vw,
    height: 0.3 * vh,
    display: "flex",
    alignItems: "center",
    padding: "15%",
    marginTop: "5%",
  },
  logo: { width: "100%", height: "80%", resizeMode: "contain" },
  logoText: { color: "white", height: "20%" },

  // Icons
  whiteIcon: {
    width: 0.1 * vw,
    height: "100%",
    resizeMode: "center",
    // tintColor: "white",
    // marginLeft: 5,
    // marginRight: 5,
    // paddingRight: 10,
  },
  blueIcon: {
    height: 0.025 * vh,
    resizeMode: "contain",
    margin: 5,
    // tintColor: "#48cae4", //045DE9
  },
  editorIcon: {
    width: "50%",
    height: "100%",
    resizeMode: "contain",
  },
  txRecordIcon: {
    // tintColor: "#48cae4", // 0070C0, 045DE9
    marginTop: 8,
    marginLeft: 0,
    marginRight: 15,
    // height: 0.05 * vh,
    // objectFit: "fill",
  },
  sidebarIcon: {
    width: 24,
    height: 24,
    // tintColor: "white",
    paddingLeft: 30,
  },

  // Images
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  roundCorner: {
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },

  // Headers
  hearderView: {
    width: vw,
    height: 0.14 * vh,
  },
  headerBox: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 0.05 * vh,
  },
  hearderText: {
    width: 0.8 * vw,
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },

  //Bottom
  bottomBox: {
    width: vw,
    // height: 0.15 * vh,
    // padding: "5%",
    // marginBottom: 0.1 * vh,
  },

  // FormViews
  loginFormView: {
    width: vw,
    height: 0.5 * vh,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5%",
    paddingTop: 0,
    // paddingBottom: "15%",
  },
  registerFormView: {
    width: vw,
    height: 0.5 * vh,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5%",
    paddingBottom: "15%",
  },

  // BoxViews
  termOfServicesView: {
    backgroundColor: "#F5F9F1",
    border: "gray",
    height: "50%",
    width: "100%",
    marginTop: 70,
  },

  profilePicture: {
    display: "flex",
    flexDirection: "row",
    width: vw,
    height: 0.15 * vh,
    resizeMode: "center",
  },

  scrollView: {
    width: "100%",
    height: "50%",
    display: "flex",
    marginBottom: 10,
  },

  // Inputs
  inputView: { width: "100%" },
  input1: {
    backgroundColor: "transparent",
    borderColor: "white",
    borderRadius: 0,
    borderBottomWidth: 0,
  },
  input2: {
    backgroundColor: "transparent",
    borderColor: "white",
    borderRadius: 0,
  },

  // Table
  profileContainer: {
    backgroundColor: "white",
    width: "100%",
    height: "20%",
    marginTop: 15,
    paddingTop: 5,
    marginBottom: 5,
    justifyContent: "center",
  },
  tableContainer: {
    backgroundColor: "white",
    borderRadius: 0,
    flex: 1,
  },
  tableAttributes: {
    alignItems: "flex-start",
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    margin: 10,
  },
  tableInfo: {
    alignItems: "flex-start",
    backgroundColor: "white",
    flex: 3,
    justifyContent: "center",
    margin: 10,
  },
  tableRow: {
    flex: 4,
    flexDirection: "row",
    height: 0.1 * vh,
  },

  // Wallet Card
  cardRow: {
    flex: 1,
    flexDirection: "row",
    height: 0.3 * vh,
    marginTop: "5%",
  },
  cardLeft: {
    flex: 1,
    // marginLeft: "3%",
    height: 0.3 * vh,
    marginRight: "3%",
    borderRadius: 20,
    marginTop: "3%",
  },
  cardRight: {
    flex: 1,
    // marginRight: "3%",
    borderRadius: 20,
  },
  emptyCard: {
    flex: 1,
    marginRight: "5%",
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "3%",
  },

  // Buttons & CheckBox
  button1: {
    width: "100%",
    backgroundColor: "white",
    borderColor: "transparent",
    borderRadius: 10,
  },
  button2: {
    width: "100%",
    borderColor: "white",
    borderRadius: 10,
    marginTop: -25,
  },
  button3: {
    width: "100%",
    backgroundColor: "#63A4EF",
    borderColor: "transparent",
    borderRadius: 10,
  },

  smallSquareBox: {
    backgroundColor: "white",
    borderWidth: 0,
    borderRadius: 15,
    width: "90%",
    height: "85%",
  },
  mediumSquareBox: {
    backgroundColor: "white",
    borderColor: "blue",
    borderWidth: 1,
    borderWidth: 0,
    borderRadius: 15,
    width: "46.5%",
    height: "100%",
  },
  mediumSquareBoxWords: {
    color: "#00B4D8",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
  },
  iconButton: {
    width: "10%",
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderRadius: 10,
  },
  checkBox: {
    padding: "10%",
    borderColor: "white",
  },

  // Links & Texts
  whiteLink: {
    color: "white",
    fontSize: 12,
    textDecorationLine: "underline",
  },
  blueLink: {
    color: "#045DE9",
    fontSize: 12,
    textDecorationLine: "underline",
  },
  whiteText: { color: "white" },
  smallWhiteText: { color: "white", fontSize: 12 },
  smallBlackText: { color: "black", fontSize: 12 },
  smallGrayText: { color: "gray", fontSize: 10 },
  blueText: { color: "#63A4EF" },
  grayText: { color: "gray" },
  blackText: { color: "black" },

  walletTotalValueText: {
    color: "black",
    fontSize: 15,
    textAlign: "center",
    verticalAlign: "middle",
    marginTop: -10,
    paddingBottom: 10,
  },

  blueDividerText: {
    //for: Tx History
    color: "#0077b6", //0077b6, 0070C0
    marginHorizontal: 16,
    marginVertical: 10,
    fontSize: 25,
    fontWeight: "800",
  },

  blueWalletHeader: {
    color: "#0070C0",
    padding: 0,
  },
  smallBlackTextC: {
    color: "black",
    fontSize: 12,
    textAlign: "center",
    // height: 45,
    // position: "relative", left: 100
  },
  emptyLine: {
    height: 0.03 * vh,
    // position: "relative", left: 100
  },

  //Header
  headerText: {
    width: vw,
    fontWeight: "700",
    color: "white",
    fontSize: 32,
    textAlign: "center",
    paddingTop: 20,
  },

  // Object Appearances
  shadow: {
    shadowColor: "#D0CECE",
    // shadowColor: "red",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
  round: {
    borderWidth: 0,
    borderRadius: 15,
  },

  // Card
  cardText: {
    fontSize: 15,
    fontWeight: "600",
  },
  // Function Buttons
  functionButton: {
    // backgroundColor: "#63A4EF",
    backgroundImage: "linear-gradient(180deg, red, yellow)",
    borderColor: "transparent",
    borderRadius: 10,
  },
  functionButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

// fontWeight
// 100 – Thin
// 200 – Extra Light (Ultra Light)
// 300 – Light
// 400 – Normal
// 500 – Medium
// 600 – Semi Bold (Demi Bold)
// 700 – Bold
// 800 – Extra Bold (Ultra Bold)
// 900 – Black (Heavy)
