import * as React from "react";
import { View } from "react-native";
import { Text, Card } from "@ui-kitten/components";
import PieChart from "react-native-expo-pie-chart";
import { styles } from "../styles";

export default function WalletCard({
  styleLR,
  walletType,
  walletName,
  walletBalance,
  footer,
  pieChartData,
}) {
  const header1 = (props) => (
    <View
      {...props}
      style={{ padding: 0, paddingTop: "3%", paddingLeft: "10%" }}
    >
      <Text style={styles.smallGrayText}>{walletType}</Text>
      <Text style={styles.blueWalletHeader}>{walletName}</Text>
    </View>
  );
  return (
    <Card style={styleLR} header={header1} footer={footer}>
      <Text style={{ height: 42 }}></Text>
      <PieChart
        data={pieChartData}
        length={110}
        rotation={180}
        zeroTotalCircleColor="#FFFFFF"
      />
      <Text style={styles.walletTotalValueText}>{walletBalance} in HKD</Text>
      <Text style={styles.emptyLine}></Text>
    </Card>
  );
}
