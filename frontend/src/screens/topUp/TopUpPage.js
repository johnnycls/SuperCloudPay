import * as React from "react";
import { ImageBackground, View, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles";
import {
  Button,
  Text,
  Card,
  Input,
  IndexPath,
  Select,
  SelectItem,
  Datepicker,
} from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";

const backgroundImage = "../../assets/homepage_images/page_background.png";

const currencyData = ["HKD", "e-HKD"];

const userWallets = ["Personal Wallet", "FTSA wallet", "HKU wallet"];

const useInputState = (initialValue = "") => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

// Datepicker
const useDatepickerState = (initialDate = null) => {
  const [date, setDate] = React.useState(initialDate);
  return { date, onSelect: setDate };
};

const now = new Date();

export default function PromisePage({ navigation }) {
  const memo_InputState = useInputState();
  const [selectedIndex1, setSelectedIndex1] = React.useState(new IndexPath(0));
  const [selectedIndex_currency1, setSelectedIndex_currency1] = React.useState(
    new IndexPath(0)
  );
  const [selectedIndex_currency2, setSelectedIndex_currency2] = React.useState(
    new IndexPath(0)
  );

  // Input
  const recipient_InputState = useInputState();
  const amount_InputState = useInputState();
  const receive_InputState = useInputState();
  const from_InputState = useInputState();

  // Select

  const displayWalletValue = userWallets[selectedIndex1.row];
  const displayValue_currency1 = currencyData[selectedIndex_currency1.row];
  const displayValue_currency2 = currencyData[selectedIndex_currency2.row];
  const renderOption = (title) => <SelectItem title={title} />;

  // Datepicker
  const minMaxPickerState = useDatepickerState();

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
            <Text style={styles.headerText}>Top Up</Text>
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
        {/* Recipient */}
        <View
          style={[
            {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              height: "24%",
            },
            styles.shadow,
          ]}
        >
          <Card style={styles.round}>
            {/* Wallet */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={[{ width: "30%" }, styles.cardText]}>Wallet</Text>
              <Select
                style={[{ width: "70%" }, styles.select]}
                placeholder="Default"
                value={displayWalletValue}
                selectedIndex={selectedIndex1}
                onSelect={(index) => setSelectedIndex1(index)}
              >
                {userWallets.map(renderOption)}
              </Select>
            </View>

            <Text
              style={{
                paddingTop: 12,
                paddingBottom: 7,
                fontSize: 14,
                color: "#7F7F7F",
              }}
            >
              Top up via:
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
                    width: "31%",
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
                    <Text style={{ color: "#00B4D8" }}>Cash</Text>
                  )}
                  onPress={() => navigation.navigate("Promise")}
                />
              </LinearGradient>

              <LinearGradient
                colors={["#83EAF1", "#63A4FF"]}
                start={{ x: 1.0, y: 1.0 }}
                end={{ x: 0.0, y: 0.0 }}
                style={[
                  {
                    width: "31%",
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
                    <Text style={{ color: "#00B4D8" }}>Bank</Text>
                  )}
                  onPress={() => navigation.navigate("Promise")}
                />
              </LinearGradient>

              <LinearGradient
                colors={["#83EAF1", "#63A4FF"]}
                start={{ x: 1.0, y: 1.0 }}
                end={{ x: 0.0, y: 0.0 }}
                style={[
                  {
                    width: "31%",
                    // height: "100%",
                    padding: 2,
                    borderRadius: 10,
                  },
                ]}
              >
                <Button
                  style={{
                    backgroundColor: "white",
                    // height: "100%",
                    // width: "100%",
                    borderRadius: 8,
                    borderColor: "white",
                  }}
                  children={(TextProps) => (
                    <Text style={{ color: "#00B4D8" }}>Card</Text>
                  )}
                  onPress={() => navigation.navigate("Promise")}
                />
              </LinearGradient>
            </View>
          </Card>
        </View>

        {/* Amount and Currency */}
        <View
          style={[
            {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              height: "18%",
            },
            styles.shadow,
          ]}
        >
          <Card
            style={[
              {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              },
              styles.shadow,
              styles.round,
            ]}
          >
            {/* Amount */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={[{ width: "30%" }, styles.cardText]}>Amount</Text>
              <Input
                style={[styles.input, { width: "70%" }]}
                size="medium"
                placeholder="top-up amount"
                {...amount_InputState}
              />
            </View>

            {/* Currency */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 10,
              }}
            >
              <Text style={[{ width: "30%" }, styles.cardText]}>Currency</Text>
              <Select
                style={[{ width: "70%" }, styles.select]}
                placeholder="Default"
                value={displayValue_currency1}
                selectedIndex={selectedIndex_currency1}
                onSelect={(index) => setSelectedIndex_currency1(index)}
              >
                {currencyData.map(renderOption)}
              </Select>
            </View>
          </Card>
        </View>

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
              Memo
            </Text>

            <Input
              multiline={true}
              textStyle={{ minHeight: "70%" }}
              placeholder="Memo"
              {...memo_InputState}
            />
          </Card>
        </View>

        {/* Make Promise */}
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
                <Text style={styles.functionButtonText}>Top Up</Text>
              )}
              onPress={() => {
                Alert.alert(
                  "Top up successfully!",
                  "Please check the wallet balance."
                );
              }}
            />
          </LinearGradient>
        </View>
      </View>
    </ImageBackground>
  );
}
