import * as React from "react";
import {
  ScrollView,
  Image,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Text, Card, Divider, Button } from "@ui-kitten/components";
import { styles } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { YearDivider } from "../txRecord/TxCard";
import WalletCard from "../userProfile/WalletCard";
import { LinearGradient } from "expo-linear-gradient";
import { walletFooter } from "../userProfile/UserProfilePage";
import { balance } from "../home/WalletViewPager";
import { walletTypeMatch } from "../../config";

const backgroundImage = "../../assets/homepage_images/page_background.png";

const currencyColor = ["#009AFA", "#7CCDFF", "#d9f0ff"];


export default function CoWalletDisplayPage({ navigation }) {
  const dispatch = useDispatch();

  const wallets = useSelector((state) => state.wallets.wallets);
  const assets = useSelector((state) => state.assets.assets);
  const currencies = useSelector((state) => state.currencies.currencies);
  const conversions = useSelector((state) => state.conversions.conversions);


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
            <Text style={styles.headerText}>Collaborative Wallets</Text>
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
        <Text style={{ height: 15 }}></Text>
        <YearDivider year={"Manage the Wallets"} />

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
        {/* Creat Wallet Button */}
        <View
          style={[
            {
              height: "8%",
              width: "100%",
            },
            styles.shadow,
          ]}
        >
          <LinearGradient
            colors={["#83EAF1", "#63A4FF"]}
            start={{ x: 1.0, y: 1.0 }}
            end={{ x: 0.0, y: 0.0 }}
            style={{
              borderRadius: 15,
            }}
          >
            <Button
              style={{
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "rgba(0,0,0,0)",
              }}
              children={(TextProps) => (
                <Text style={styles.functionButtonText}>
                  Create a co-wallet
                </Text>
              )}
              onPress={() => {
                navigation.navigate("CreateCoWallet");
              }}
            />
          </LinearGradient>
        </View>
        {/* Request to join other wallet Button */}
        <View
          style={[
            {
              height: "8%",
              width: "100%",
              marginTop: 10,
            },
            styles.shadow,
          ]}
        >
          <LinearGradient
            colors={["#83EAF1", "#63A4FF"]}
            start={{ x: 1.0, y: 1.0 }}
            end={{ x: 0.0, y: 0.0 }}
            style={{
              borderRadius: 15,
            }}
          >
            <Button
              style={{
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "rgba(0,0,0,0)",
              }}
              children={(TextProps) => (
                <Text style={styles.functionButtonText}>
                  Request to join a wallet
                </Text>
              )}
              onPress={() => {
                navigation.navigate("RequestCoWallet");
              }}
            />
          </LinearGradient>
        </View>
      </View>
    </ImageBackground>
  );
}
