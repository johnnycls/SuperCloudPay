import * as React from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Text } from "@ui-kitten/components";
import { styles } from "../styles";
import { useDispatch } from "react-redux";
import { YearDivider } from "../txRecord/TxCard";
import WalletCard from "../userProfile/WalletCard";

const backgroundImage = "../../assets/homepage_images/page_background.png";

const currencyColor = ["#009AFA", "#7CCDFF", "#d9f0ff"];

const walletFooter = (props) => (
  <View {...props} style={[props.style, styles.footerContainer]}>
    <Text style={{ fontSize: 12, color: "#009AFA" }}> ●</Text>
    <Text style={{ fontSize: 10, color: "#595959" }}> HKD </Text>
    <Text style={{ fontSize: 12, color: "#7CCDFF" }}> ●</Text>
    <Text style={{ fontSize: 10, color: "#595959" }}> e-HKD </Text>
    <Text style={{ fontSize: 12, color: "#d9f0ff" }}> ●</Text>
    <Text style={{ fontSize: 10, color: "#595959" }}> Gov Voucher </Text>
  </View>
);

export default function WalletPage({ navigation }) {
  const dispatch = useDispatch();

  return (
    <ImageBackground
      source={require(backgroundImage)}
      resizeMode="cover"
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
      }}
    >
      {/* Header 0.14vh*/}
      <View style={styles.hearderView}>
        <View style={styles.headerBox}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.headerText}>Wallets</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Body */}
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          height: "83%",
          width: "90%",
          paddingTop: 15,
        }}
      ></View>
    </ImageBackground>
  );
}
