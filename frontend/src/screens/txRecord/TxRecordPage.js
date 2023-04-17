import * as React from "react";
import {
  ScrollView,
  ImageBackground,
  View,
  TouchableOpacity,
} from "react-native";
import { Text } from "@ui-kitten/components";
import { styles } from "../styles";
import { TxCardNegative, TxCardPositive, YearDivider } from "./TxCard";
import { useSelector } from "react-redux";

const backgroundImage = "../../assets/homepage_images/page_background.png";

export default function UserProfilePage({ navigation }) {
  const transactions = useSelector((state) => state.transactions.transactions);
  const myWalletAddress = useSelector((state) => state.user.wallets);

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
            <Text style={styles.headerText}>Transaction History</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Wallet Card Display */}
      <ScrollView
        style={{
          paddingTop: 20,
          paddingHorizontal: 20,
          display: "flex",
          width: "100%",
        }}
      >
        {transactions.map((transaction) =>
          myWalletAddress.includes(transaction.fromWallet) ? (
            <TxCardNegative
              key={transaction.id}
              // image={require("../../assets/icons/flight.png")}
              txName={transaction.toWallet}
              txTime={transaction.datetime}
              txAmount={"-$" + transaction.amount.toString()}
            />
          ) : myWalletAddress.includes(transaction.toWallet) ? (
            <TxCardPositive
              key={transaction.id}
              // image={require("../../assets/icons/office.png")}
              txName={transaction.fromWallet}
              txTime={transaction.datetime}
              txAmount={"+$" + transaction.amount.toString()}
            />
          ) : null
        )}
        {/* <YearDivider year={"2022"} />
        <TxCardPositive
          image={require("../../assets/icons/office.png")}
          txName={"Salary"}
          txTime={"26 Oct 12:15"}
          txAmount={"+$1,000.00"}
        />
        <TxCardNegative
          image={require("../../assets/icons/flight.png")}
          txName={"American Airline"}
          txTime={"20 Oct 10:23"}
          txAmount={"-$789.00"}
        />
        <TxCardPositive
          image={require("../../assets/icons/office.png")}
          txName={"Salary"}
          txTime={"26 Sep 12:15"}
          txAmount={"+$1,000.00"}
        />
        <YearDivider year={"2021"} />
        <TxCardPositive
          image={require("../../assets/icons/office.png")}
          txName={"Salary"}
          txTime={"23 Oct 17:12"}
          txAmount={"+$1,000.00"}
        />
        <TxCardNegative
          image={require("../../assets/icons/hotel.png")}
          txName={"Holiday"}
          txTime={"7 Jan 16:01"}
          txAmount={"-$851.00"}
        />
        <YearDivider year={"2020"} />
        <TxCardPositive
          image={require("../../assets/icons/office.png")}
          txName={"Salary"}
          txTime={"9 Mar 14:13"}
          txAmount={"+$1,000.00"}
        />
        <TxCardNegative
          image={require("../../assets/icons/hotel.png")}
          txName={"Hotel"}
          txTime={"20 Feb 08:12"}
          txAmount={"-$1,010.00"}
        /> */}
      </ScrollView>
      {/* <BottomBar navigation={navigation} isHome={false} /> */}
    </ImageBackground>
  );
}
