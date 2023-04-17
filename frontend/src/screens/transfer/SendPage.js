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
} from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { makeTransaction } from "../../slices/transactionsSlice";

const backgroundImage = "../../assets/homepage_images/page_background.png";

const useInputState = (initialValue = "") => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

export default function SendPage({ route, navigation }) {
  const dispatch = useDispatch();

  const wallets = useSelector((state) => state.wallets.wallets);
  const myWalletAddress = useSelector((state) => state.user.wallets);
  const myWallets = wallets.filter((wallet) =>
    myWalletAddress.includes(wallet.address)
  );
  const currencies = useSelector((state) => state.currencies.currencies);
  const currencyCodes = currencies.map((currency) => currency.code);

  const amount = useInputState();
  const memo = useInputState();
  const [recipient, setRecipient] = useState("");
  const [selectedIndex_currency1, setSelectedIndex_currency1] = React.useState(
    new IndexPath(0)
  );

  // Select
  const displayValue_currency1 = currencyCodes[selectedIndex_currency1.row];
  const renderOption = (title) => <SelectItem title={title} key={title} />;

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
            <Text style={styles.headerText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Body */}
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
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
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={[{ width: "30%" }, styles.cardText]}>Recipient</Text>
              <Input
                style={[styles.input, { width: "70%" }]}
                size="medium"
                disabled={false}
                value={recipient}
                onChangeText={(text) => setRecipient(text)}
              />
            </View>

            <Text
              style={{
                paddingTop: 12,
                paddingBottom: 7,
                fontSize: 14,
                color: "#7F7F7F",
              }}
            >
              Specify recipient via:
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
                    <Text style={{ color: "#00B4D8" }}>Contacts</Text>
                  )}
                  onPress={() => navigation.navigate("Contacts")}
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
                    <Text style={{ color: "#00B4D8" }}>Address</Text>
                  )}
                  onPress={() => navigation.navigate("AddressInput")}
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
                    <Text style={{ color: "#00B4D8" }}>QR Code</Text>
                  )}
                  onPress={() => navigation.navigate("Scan")}
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
                placeholder="transfer amount"
                {...amount}
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
                {currencyCodes.map(renderOption)}
              </Select>
            </View>
          </Card>
        </View>

        {/* Memo */}
        <View
          style={[
            {
              height: "25%",
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
              textStyle={{ minHeight: "60%" }}
              placeholder="Memo"
              {...memo}
            />
          </Card>
        </View>

        {/* Make Promise */}
        <View
          style={[
            {
              height: "25%",
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
                <Text style={styles.functionButtonText}>Transfer</Text>
              )}
              onPress={() => {
                dispatch(
                  makeTransaction({
                    fromWallet: myWallets[0].address,
                    toWallet: recipient,
                    currency: displayValue_currency1,
                    amount: amount.value,
                    transactionType: "p2p",
                  })
                );
              }}
            />
          </LinearGradient>
        </View>
      </View>
    </ImageBackground>
  );
}
