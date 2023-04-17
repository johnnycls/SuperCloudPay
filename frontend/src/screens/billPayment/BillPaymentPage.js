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
  SelectGroup,
  SelectItem,
} from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";
// import BottomBar from "../general/BottomBar";

const backgroundImage = "../../assets/homepage_images/page_background.png";
const data = ["Merchant 1", "Merchant 2", "Merchant 2", "Merchant 2"];

const merchantData = {
  "Merchant Group 1": ["Merchant 1a", "Merchant 1b"],
  "Merchant Group 2": ["Merchant 2a", "Merchant 2b"],
  "Merchant Group 3": ["Merchant 3a", "Merchant 3b"],
};

const billTypeData = [
  "Bill Type 1",
  "Bill Type 2",
  "Bill Type 3",
  "Bill Type 4",
];

const currencyData = ["HKD", "e-HKD", "Consumption Voucher"];

const useInputState = (initialValue = "") => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

export default function BillPaymentPage({ navigation }) {
  const billID_InputState = useInputState();
  const amount_InputState = useInputState();
  const memo_InputState = useInputState();

  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

  const [selectedMerchantIndex, setSelectedMerchantIndex] = React.useState(
    new IndexPath(0, 1)
  );

  const [selectedBillTypeIndex, setSelectedBillTypeIndex] = React.useState(
    new IndexPath(0)
  );

  // here is the problem
  const displayMerchantValue = merchantData[selectedMerchantIndex.row];
  // const displayMerchantValue = selectedMerchantIndex.map((index) => {
  //   const groupTitle = Object.keys(merchantData)[index.section];
  //   return merchantData[groupTitle][index.row];
  // });
  const displayBillTypeValue = billTypeData[selectedBillTypeIndex.row];
  const displayCurrencyValue = currencyData[selectedIndex.row];

  const renderOption = (title) => <SelectItem title={title} />;
  const renderMerchant = (title) => (
    <SelectGroup title={title}>
      {merchantData[title].map(renderOption)}
    </SelectGroup>
  );

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
            <Text style={styles.headerText}>Bill Payment</Text>
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
        {/* Merchant */}
        <View
          style={[
            {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              height: "25%",
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
              <Text style={[{ width: "30%" }, styles.cardText]}>Merchant</Text>
              <Select
                style={[{ width: "70%" }, styles.select]}
                placeholder="Default"
                value={displayMerchantValue}
                selectedIndex={selectedMerchantIndex}
                onSelect={(index) => setSelectedMerchantIndex(index)}
              >
                {Object.keys(merchantData).map(renderMerchant)}
              </Select>
            </View>

            {/* Bill Type */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: 10,
              }}
            >
              <Text style={[{ width: "30%" }, styles.cardText]}>Bill Type</Text>
              <Select
                style={[{ width: "70%" }, styles.select]}
                placeholder="Default"
                value={displayBillTypeValue}
                selectedBillTypeIndex={selectedBillTypeIndex}
                onSelect={(index) => setSelectedBillTypeIndex(index)}
              >
                {billTypeData.map(renderOption)}
              </Select>
            </View>

            {/* Bill ID No. */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: 10,
              }}
            >
              <Text style={[{ width: "30%" }, styles.cardText]}>
                Bill ID No.
              </Text>
              <Input
                style={[styles.input, { width: "70%" }]}
                size="medium"
                placeholder="bill identification number"
                {...billID_InputState}
              />
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
                placeholder="payment amount"
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
                value={displayCurrencyValue}
                selectedIndex={selectedIndex}
                onSelect={(index) => setSelectedIndex(index)}
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
              width: "100%",
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

        {/* Pay Bill */}
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
                <Text style={styles.functionButtonText}>Pay Bill</Text>
              )}
            />
          </LinearGradient>
        </View>
      </View>
    </ImageBackground>
  );
}
