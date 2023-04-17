import * as React from "react";
import {
  ScrollView,
  Image,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Text, Card, Divider, Avatar } from "@ui-kitten/components";
import { styles } from "../styles";
// import PieChart from "react-native-expo-pie-chart";
import { useDispatch, useSelector } from "react-redux";
import InfoDisplay from "./InfoDisplay";
import WalletCard from "./WalletCard";
import { balance } from "../home/WalletViewPager";
import { walletTypeMatch } from "../../config";
// import { LinearGradient } from "expo-linear-gradient";

const backgroundImage = "../../assets/homepage_images/page_background.png";

const currencyColor = ["#009AFA", "#7CCDFF", "#d9f0ff"];

export const walletFooter = (props) => (
  <View {...props} style={[props.style, styles.footerContainer]}>
    <Text style={{ fontSize: 12, color: "#009AFA" }}> ●</Text>
    <Text style={{ fontSize: 10, color: "#595959" }}> HKD </Text>
    <Text style={{ fontSize: 12, color: "#7CCDFF" }}> ●</Text>
    <Text style={{ fontSize: 10, color: "#595959" }}> e-HKD </Text>
    <Text style={{ fontSize: 12, color: "#d9f0ff" }}> ●</Text>
    <Text style={{ fontSize: 10, color: "#595959" }}> USD </Text>
  </View>
);

export default function UserProfilePage({ navigation }) {
  const dispatch = useDispatch();

  const { username, phone, firstName, lastName } = useSelector(
    (state) => state.user
  );

  const wallets = useSelector((state) => state.wallets.wallets);
  const assets = useSelector((state) => state.assets.assets);
  const currencies = useSelector((state) => state.currencies.currencies);
  const conversions = useSelector((state) => state.conversions.conversions);

  const personalWallet = wallets.filter((wallet) => wallet.category === "P")[0];

  const pieChartData = (assets) =>
    assets.map((currency, index) => ({
      key: currency.id,
      count: currency.amount,
      color: currencyColor[index],
    }));

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
            <Text style={styles.headerText}>My Profile</Text>
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
      >
        {/* Profile Image Display 0.15vh*/}
        <Avatar
          style={{
            width: 150,
            height: 150,
            borderColor: "#00B4D8",
            borderRadius: 150,
            borderWidth: 3,
          }}
          source={require("../../assets/images/cat.png")}
        />
        <Text
          style={{
            color: "black",
            fontSize: 15,
            textAlign: "center",
            paddingTop: 5,
          }}
        >
          Personal Wallet Address: {personalWallet.address}
        </Text>

        {/* Profile Information Display 0.3vh*/}
        <View style={styles.profileContainer}>
          <View style={styles.tableContainer}>
            <InfoDisplay attribute={"Username"} information={username} />
            <Divider />
            <InfoDisplay
              attribute={"Name"}
              information={firstName + " " + lastName}
            />
            <Divider />
            <InfoDisplay attribute={"Phone"} information={phone} />
          </View>
        </View>

        {/* Wallet Card Display */}
        <ScrollView style={styles.scrollView}>
          {wallets.map((wallet) => {
            const filteredAssets = assets.filter(
              (asset) => asset.wallet === wallet.address
            );
            return (
              <WalletCard
                styleLR={styles.cardLeft}
                walletType={walletTypeMatch[wallet.category]}
                // walletName={wallet.name}
                walletName={"wallet.name"}
                walletBalance={balance(filteredAssets, conversions)}
                footer={walletFooter}
                pieChartData={pieChartData(filteredAssets)}
              />
            );
          })}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}
