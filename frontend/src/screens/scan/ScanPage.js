import * as React from "react";
import {
  Image,
  View,
  TouchableOpacity,
  ImageBackground,
  Linking,
} from "react-native";
import { Button, Text } from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../styles";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useState, useEffect } from "react";

const backgroundImage = "../../assets/homepage_images/blue_background.png";

export default function UserProfilePage({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log(
      `Bar Code With Type ${type} and data ${Linking.openURL(
        `${data}`
      )} has been scanned.`
    );
    // Call the onScanResult function with the scan result
    navigation.navigate("Send", data);
  };

  const handleScanned = () => {
    const sample = "638d76e1a8344a11b90aacba1f3b4784";
    navigation.navigate("Send", { scanValue: sample });
  };

  if (hasPermission === null) {
    return <Text>Requesting for Camera Permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No Access to Camera</Text>;
  }

  const newV = "12345";

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
            <Text style={styles.headerText}>Scan</Text>
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
        <View
          style={{
            height: "80%",
            width: "100%",
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{
              position: "absolute",
              top: 70,
              left: 0,
              bottom: 0,
              right: 0,
            }}
          />
          {scanned && (
            <Button
              title="Tap to Scan Again"
              onPress={() => setScanned(false)}
            />
          )}
          <Image
            source={require("../../assets/images/focus.png")}
            resizeMode="stretch"
            style={{
              marginTop: 70,
              width: 200,
              height: 200,
            }}
          />
        </View>

        {/* Scan from Gallery */}
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
                <Text style={styles.functionButtonText}>Scan from Gallery</Text>
              )}
              onPress={() => handleScanned()}
            />
          </LinearGradient>
        </View>

        <View
          style={[
            {
              width: "100%",
              height: "8%",
              marginHorizontal: 20,
              marginVertical: 0,
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
                <Text style={styles.functionButtonText}>Scan</Text>
              )}
              onPress={() => handleScanned()}
            />
          </LinearGradient>
        </View>
      </View>

      <View style={{ flex: 1 }}>{/* Code Display box */}</View>
    </ImageBackground>
  );
}
