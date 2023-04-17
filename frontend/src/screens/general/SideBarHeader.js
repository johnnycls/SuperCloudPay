import * as React from "react";
import { Image, StatusBa, View } from "react-native";
import { Layout, Avatar, Text, Divider } from "@ui-kitten/components";
import { styles } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { balance } from "../home/WalletViewPager";

export default function SideBarHeader({ navigation }) {
  const dispatch = useDispatch();

  const wallets = useSelector((state) => state.wallets.wallets);
  const assets = useSelector((state) => state.assets.assets);
  const conversions = useSelector((state) => state.conversions.conversions);

  const personalWallet = wallets.filter((wallet) => wallet.category === "P");

  const personalAssets = assets.filter((asset) =>
    personalWallet.some((wallet) => wallet.address === asset.wallet)
  );

  // Count the total balance of the account
  let hkdBalance = balance(personalAssets, conversions);

  return (
    <Layout
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0)",
      }}
    >
      {/* <View style={styles.hearderView} /> */}
      <Image
        style={{
          width: "100%",
          height: 100,
          resizeMode: "contain",
          margin: "10%",
          // paddingTop: ,
        }}
        source={require("../../assets/images/Logo_w.png")}
      />
      <Avatar
        style={{
          width: 120,
          height: 120,
          borderColor: "#00B4D8",
          borderRadius: 120,
          borderWidth: 3,
        }}
        source={require("../../assets/images/cat.png")}
      />
      <Text style={{ color: "white", paddingTop: 5 }}>Personal Wallet</Text>
      <Text></Text>
      <Text style={{ fontWeight: "600", fontSize: 25, color: "white" }}>
        {"20.00"}
      </Text>
      <Text style={{ fontSize: 12, color: "white" }}>Hong Kong Dollars</Text>
      <Text></Text>
      {/* <Text style={{ color: "white" }}>Wallet Address: </Text>
      <Text style={{ color: "white", fontSize: 10 }}>
        {personalWallet[0].address}
      </Text> */}
      <Divider />
    </Layout>
  );
}
