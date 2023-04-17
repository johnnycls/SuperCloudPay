import * as React from "react";
import {
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { styles } from "../styles";
import {
  Button,
  Text,
  Card,
  Input,
  IndexPath,
  Select,
  SelectItem,
} from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";

const backgroundImage = "../../assets/homepage_images/page_background.png";

const userTypes = ["Admin", "User"];

const useInputState = (initialValue = "") => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

export default function PromisePage({ navigation }) {
  const walletAddress_InputState = useInputState();
  const creator_InputState = useInputState();
  const memo_InputState = useInputState();
  const [selectedIndex1, setSelectedIndex1] = React.useState(new IndexPath(0));

  const displayWalletValue = userTypes[selectedIndex1.row];

  const renderOption = (title) => <SelectItem title={title} />;

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
            <Text style={styles.headerText}>Join a Co-Wallet</Text>
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
        {/* Wallet Info */}
        <View
          style={[
            {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              height: "32%",
            },
            styles.shadow,
          ]}
        >
          <Card style={styles.round}>
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={[{ width: "30%" }, styles.cardText]}>Wallet</Text>
              <Input
                style={[styles.input, { width: "70%" }]}
                size="medium"
                placeholder="Wallet Address"
                {...walletAddress_InputState}
              />
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 10,
              }}
            >
              <Text style={[{ width: "30%" }, styles.cardText]}>User Type</Text>
              <Select
                style={[{ width: "70%" }, styles.select]}
                placeholder="Default"
                value={displayWalletValue}
                selectedIndex={selectedIndex1}
                onSelect={(index) => setSelectedIndex1(index)}
              >
                {userTypes.map(renderOption)}
              </Select>
            </View>

            <Text
              style={{
                paddingTop: 15,
                marginBottom: -5,
                fontSize: 14,
                color: "#7F7F7F",
              }}
            >
              or get wallet address via:
            </Text>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                height: "39%",
              }}
            >
              <LinearGradient
                colors={["#83EAF1", "#63A4FF"]}
                start={{ x: 1.0, y: 1.0 }}
                end={{ x: 0.0, y: 0.0 }}
                style={[
                  {
                    width: "100%",
                    padding: 2,
                    borderRadius: 10,
                  },
                ]}
              >
                <Button
                  style={{
                    backgroundColor: "white",
                    borderRadius: 8,
                    borderColor: "white",
                  }}
                  children={(TextProps) => (
                    <Text style={{ color: "#00B4D8" }}>QR Code</Text>
                  )}
                  onPress={() => navigation.navigate("Promise")}
                />
              </LinearGradient>
            </View>
          </Card>
        </View>

        {/* Memo */}
        <View
          style={[
            {
              height: "50%",
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
              Memo
            </Text>

            <Input
              multiline={true}
              textStyle={{ minHeight: "80%" }}
              placeholder="Memo"
              {...memo_InputState}
            />
          </Card>
        </View>

        {/* Request */}
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
                <Text style={styles.functionButtonText}>Request</Text>
              )}
              onPress={() => {
                Alert.alert(
                  "Request is posted successfully!",
                  "Please wait for the reply from the wallet manager."
                );
              }}
            />
          </LinearGradient>
        </View>
      </View>
    </ImageBackground>
  );
}
