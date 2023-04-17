import * as React from "react";
import { View, Image } from "react-native";
import { Button, Text, Icon } from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../styles";

// const buttonColor = "#00B4D8";

export default function Buttons({ navigation }) {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      {/* Large Bottons */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 15,
          height: "25%",
        }}
      >
        <View style={[{ width: "48%", height: "100%" }, styles.shadow]}>
          <LinearGradient
            colors={["#83EAF1", "#63A4FF"]}
            start={{ x: 1.0, y: 1.0 }}
            end={{ x: 0.0, y: 0.0 }}
            style={{
              padding: 2,
              borderRadius: 15,
            }}
          >
            <Button
              style={{
                backgroundColor: "white",
                height: "100%",
                width: "100%",
                borderRadius: 13,
                borderColor: "white",
              }}
              children={(TextProps) => (
                <Text category="button_text">Promise</Text>
              )}
              onPress={() => navigation.navigate("Promise")}
            />
          </LinearGradient>
        </View>
        <View style={[{ width: "48%", height: "100%" }, styles.shadow]}>
          <LinearGradient
            colors={["#83EAF1", "#63A4FF"]}
            start={{ x: 1.0, y: 1.0 }}
            end={{ x: 0.0, y: 0.0 }}
            style={[
              {
                padding: 2,
                borderRadius: 15,
              },
              styles.shadow,
            ]}
          >
            <Button
              style={{
                backgroundColor: "white",
                height: "100%",
                width: "100%",
                borderRadius: 13,
                borderColor: "white",
              }}
              children={(TextProps) => (
                <Text style={{ textAlign: "center" }} category="button_text">
                  Collaborative Wallet
                </Text>
              )}
              onPress={() => navigation.navigate("ShowCoWallet")}
            />
          </LinearGradient>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "2%",
        }}
      ></View>
      {/* Small Buttons */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 15,
          height: "20%",
        }}
      >
        {/* Send */}
        <View
          style={{
            width: "18%",
            height: "90%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            style={[styles.smallSquareBox, styles.shadow]}
            accessoryLeft={() => (
              <Icon
                style={{ width: 32, height: 32 }}
                fill="#75CEEC"
                name="diagonal-arrow-right-up-outline"
              />
            )}
            onPress={() => {
              navigation.navigate("Send");
            }}
          />
          <Text style={{ padding: "10%" }} category="small_bottom_text">
            Send
          </Text>
        </View>

        {/* Receive */}
        <View
          style={{
            width: "18%",
            height: "90%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            style={[styles.smallSquareBox, styles.shadow]}
            accessoryLeft={() => (
              <Icon
                style={{ width: 32, height: 32 }}
                fill="#75CEEC"
                name="download-outline"
              />
            )}
            onPress={() => {
              navigation.navigate("Receive");
            }}
          />

          <Text style={{ padding: "10%" }} category="small_bottom_text">
            Receive
          </Text>
        </View>

        {/* Top-up */}
        <View
          style={{
            width: "18%",
            height: "90%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            style={[styles.smallSquareBox, styles.shadow]}
            accessoryLeft={() => (
              // <Icon
              //   style={{ width: 32, height: 32 }}
              //   fill="#75CEEC"
              //   name="download-outline"
              // />
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../../assets/homepage_images/top-up.png")}
              />
            )}
            onPress={() => {
              navigation.navigate("TopUp");
            }}
          />
          <Text style={{ padding: "10%" }} category="small_bottom_text">
            Top Up
          </Text>
        </View>

        {/* Withdraw */}
        <View
          style={{
            width: "18%",
            height: "90%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            style={[styles.smallSquareBox, styles.shadow]}
            accessoryLeft={() => (
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../../assets/homepage_images/withdraw.png")}
              />
            )}
            onPress={() => {
              navigation.navigate("Withdraw");
            }}
          />
          <Text style={{ padding: "10%" }} category="small_bottom_text">
            Withdraw
          </Text>
        </View>

        {/* FX */}
        <View
          style={{
            width: "18%",
            height: "90%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            style={[styles.smallSquareBox, styles.shadow]}
            accessoryLeft={() => (
              <Icon
                style={{ width: 32, height: 32 }}
                fill="#75CEEC"
                name="file-text-outline" //"repeat-outline"
              />
            )}
            onPress={() => {
              navigation.navigate("BillPayment");
            }}
          />
          <Text style={{ padding: "10%" }} category="small_bottom_text">
            Pay Bill
          </Text>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "2%",
        }}
      ></View>

      {/* Medium Buttons */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "40%",
          paddingTop: 12,
        }}
      >
        {/* New Campaign */}
        <View style={{ width: "48%", height: "100%" }}>
          <Button
            style={[
              {
                height: "100%",
                backgroundColor: "white",
                borderWidth: 0,
                borderRadius: 15,
              },
              styles.shadow,
            ]}
            children={(TextProps) => (
              <Text style={{ textAlign: "center" }} category="button_text">
                New Campaign
              </Text>
            )}
          />
        </View>
        <View
          style={{
            width: "48%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: "100%",
              height: "47%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              style={[styles.mediumSquareBox, styles.shadow]}
              onPress={() => {
                navigation.navigate("BillPayment");
              }}
              children={(TextProps) => (
                <Text style={[styles.mediumSquareBoxWords]}>
                  Bill Splitting
                </Text>
              )}
            />

            <Button
              style={[styles.mediumSquareBox, styles.shadow]}
              onPress={() => {
                navigation.navigate("UserProfile");
              }}
              children={(TextProps) => (
                <Text style={[styles.mediumSquareBoxWords]}>User Profile</Text>
              )}
            />
          </View>
          <View
            style={{
              width: "100%",
              height: "47%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              style={[styles.mediumSquareBox, styles.shadow]}
              onPress={() => {
                navigation.navigate("TxRecord");
              }}
              children={(TextProps) => (
                <Text style={[styles.mediumSquareBoxWords]}>
                  Merchant Coupons
                </Text>
              )}
            />

            <Button
              style={[styles.mediumSquareBox, styles.shadow]}
              children={(TextProps) => (
                <Text style={[styles.mediumSquareBoxWords]}>Gift Cards</Text>
              )}
            />
          </View>
        </View>
      </View>
      {/* Merchant Advertisment */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "14%",
          paddingTop: 17,
        }}
      >
        {/* New Campaign */}
        <View style={{ width: "100%", height: "100%" }}>
          <Button
            style={[
              {
                height: "100%",
                backgroundColor: "white",
                borderWidth: 0,
                borderRadius: 15,
              },
              styles.shadow,
            ]}
            children={(TextProps) => (
              <Text style={{ textAlign: "center" }} category="button_text">
                Merchant Advertisment Banner
              </Text>
            )}
          />
        </View>
      </View>
    </View>
  );
}
