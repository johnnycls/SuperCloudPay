import * as React from "react";
import { Image, View, TouchableOpacity, ImageBackground } from "react-native";
import { Button, Text, Card, Divider } from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../styles";
// import BottomBar from "../general/BottomBar";

import QRCode from "react-native-qrcode-svg";

import { useDispatch } from "react-redux";
import { ReceiveMethod } from "./ReceiveMethod";

const backgroundImage = "../../assets/homepage_images/blue_background.png";

export default function UserProfilePage({ navigation }) {
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
            <Text style={styles.headerText}>Receive</Text>
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
          <QRCode
            value="One-time Dynamic Payment Token (Pay without password)"
            size={180}
          />
        </View>

        {/* Currency */}
        <ReceiveMethod
          image={require("../../assets/icons/office.png")}
          payMethod={"e-HKD"}
          text={"currency"}
        />

        {/* Wallet */}
        <ReceiveMethod
          image={require("../../assets/icons/office.png")}
          payMethod={"Personal Wallet"}
          text={"wallet"}
        />

        {/* Pay by QR Code */}
        <View
          style={[
            {
              width: "100%",
              height: "8%",
              marginHorizontal: 20,
              marginVertical: 20,
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
                <Text style={styles.functionButtonText}>
                  Receive by QR Code
                </Text>
              )}
              onPress={() => navigation.navigate("Scan")}
            />
          </LinearGradient>
        </View>
      </View>
    </ImageBackground>
  );
}
