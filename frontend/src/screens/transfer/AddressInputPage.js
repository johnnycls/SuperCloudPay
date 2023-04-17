import * as React from "react";
import { ImageBackground, View, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles";
import {
  Button,
  Text,
  Card,
  Input,
  IndexPath,
} from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";

const backgroundImage = "../../assets/homepage_images/page_background.png";


const useInputState = (initialValue = "") => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};



export default function AddressInputPage({ navigation }) {

  // Input
  const recipient_InputState = useInputState();

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
            <Text style={styles.headerText}>Input Wallet Address</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Body */}
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "83%",
          width: "90%",
          paddingTop: 15,
        }}
      >


        {/* Memo */}
        <View
          style={[
            {
              height: "40%",
            },
            styles.shadow,
          ]}
        >
          <Card
            style={[
              {
                borderWidth: 0,
                borderRadius: 15,
              },
              styles.shadow,
            ]}
          >
            <Text
              style={{
                paddingTop: 5,
                paddingBottom: 18,
                color: "#595959",
                fontWeight: "bold",
                fontSize: 24,
                textAlign: "center",
              }}
            >
              Input box of wallet address
            </Text>

            <Input
              multiline={true}
              textStyle={{ minHeight: "70%" }}
              placeholder="Memo"
              {...recipient_InputState}
            />
          </Card>
        </View>

        {/* Confirm wallet address */}
        <View
          style={[
            {
              height: "8%",
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
                <Text style={styles.functionButtonText}>Confirm Wallet Address</Text>
              )}
            />
          </LinearGradient>
        </View>
      </View>
    </ImageBackground>
  );
}
