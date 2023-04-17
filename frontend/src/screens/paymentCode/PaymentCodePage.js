import * as React from "react";
import { Image, View, TouchableOpacity, ImageBackground } from "react-native";
import { Button, Text, Card, Divider } from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../styles";

import QRCode from "react-native-qrcode-svg";

import { useDispatch, useSelector } from "react-redux";
import { PaymentMethod } from "./PaymentMethod";
import { walletTypeMatch } from "../../config";

const backgroundImage = "../../assets/homepage_images/blue_background.png";

export default function UserProfilePage({ navigation }) {
  const dispatch = useDispatch();

  const wallets = useSelector((state) => state.wallets.wallets);
  const currencies = useSelector((state) => state.currencies.currencies);

  const personalWallet = wallets.filter((wallet) => wallet.category === "P")[0];

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
            <Text style={styles.headerText}>Payment Code</Text>
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
        {/* Code Display box */}
        <View
          style={[
            {
              backgroundColor: "white",
              height: "55%",
              width: "100%",
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            },
            styles.round,
            styles.shadow,
          ]}
        >
          <Image
            style={{
              width: "80%",
              height: "20%",
              marginTop: 0,
              marginBottom: 50,
            }}
            source={require("../../assets/images/barcode_sample.jpg")}
          />
          <QRCode value={personalWallet.paymentCode} size={180} />
        </View>

        {/* Currency */}
        {/* {currencies.map((currency) => {
          return ( */}
        <PaymentMethod
          image={require("../../assets/icons/office.png")}
          payMethod={currencies[0].name}
          text={"currency"}
        />
        {/* );
        })} */}

        {/* Wallet */}
        {/* {wallets.map((wallet) => {
          return ( */}
        <PaymentMethod
          image={require("../../assets/icons/office.png")}
          payMethod={walletTypeMatch[wallets[0].category]}
          text={wallets[0].address}
        />
        {/* );
        })} */}

        {/* Pay by QR Code */}
        <View
          style={[
            {
              width: "100%",
              height: "8%",
              marginHorizontal: 10,
              marginVertical: 5,
            },
            styles.shadow,
          ]}
        >
          <LinearGradient
            colors={["#83EAF1", "#63A4FF"]}
            start={{ x: 1.0, y: 1.0 }}
            end={{ x: 0.0, y: 0.0 }}
            style={{
              borderRadius: 10,
            }}
          >
            <Button
              style={{
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "rgba(0,0,0,0)",
              }}
              children={(TextProps) => (
                <Text style={styles.functionButtonText}>Pay by QR Code</Text>
              )}
              onPress={() => navigation.navigate("Scan")}
            />
          </LinearGradient>
        </View>
      </View>
    </ImageBackground>
  );
}
