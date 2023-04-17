import * as React from "react";
import { View } from "react-native";
import { ViewPager, Text, IndexPath } from "@ui-kitten/components";
import PieChart from "react-native-expo-pie-chart";
import { styles } from "../styles";
import { useSelector } from "react-redux";
import { walletTypeMatch, currencyColor } from "../../config";

// Count the total balance of a filtered assets
export function balance(allAssets, conversions) {
  let hkdBalance = 0;

  for (let a = 0; a < allAssets.length; a++) {
    const asset = allAssets[a];
    let toHKDRate;
    if (asset.currency === "HKD") {
      toHKDRate = 1;
    } else {
      for (let i = 0; i < conversions.length; i++) {
        if (
          conversions[i].fromCurrency === asset.currency &&
          conversions[i].toCurrency === "HKD"
        ) {
          toHKDRate = conversions[i].rate;
          break;
        }
      }
    }
    hkdBalance = hkdBalance + asset.amount * toHKDRate;
  }
  return hkdBalance.toFixed(2);
}

export default function WalletViewPager() {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

  const myWalletAddress = useSelector((state) => state.user.wallets);
  const wallets = useSelector((state) => state.wallets.wallets);

  const assets = useSelector((state) => state.assets.assets);
  const currencies = useSelector((state) => state.currencies.currencies);
  const conversions = useSelector((state) => state.conversions.conversions);
  const myWallets = wallets.filter((wallet) =>
    myWalletAddress.includes(wallet.address)
  );

  const pieChartData = (assets, walletAddress) =>
    assets.map((asset, index) => ({
      key: walletAddress + index,
      count: asset.amount,
      color: currencyColor[index],
    }));

  return (
    <ViewPager
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
      style={[styles.shadow, { height: "100%" }]}
    >
      {myWallets.map((wallet) => {
        const filteredAssets = assets.filter(
          (asset) => asset.wallet === wallet.address
        );

        return (
          <View
            style={{
              width: "100%",
              height: "100%",
              paddingLeft: 15,
              paddingRight: 15,
            }}
            key={wallet.address}
          >
            <View
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                borderRadius: 20,
                backgroundColor: "white",
                padding: 20,
              }}
            >
              <View
                style={{
                  width: "65%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Text category="button_text">
                  {walletTypeMatch[wallet.category]}
                </Text>
                <View>
                  <Text style={{ fontSize: 26 }}>
                    {`HKD: ${balance(filteredAssets, conversions)}`}
                  </Text>
                  {filteredAssets.map((asset) => (
                    <Text
                      style={{ fontSize: 10 }}
                      key={Math.random()}
                    >{`${asset.currency}: ${asset.amount}`}</Text>
                  ))}
                </View>
                {/* <Text style={{ fontSize: 12 }}>
                  Wallet Address: {wallet.address}
                </Text> */}
              </View>
              <View style={{ width: "35%", height: "100%" }}>
                <PieChart
                  data={pieChartData(filteredAssets, wallet.address)}
                  length={120}
                  rotation={180}
                  zeroTotalCircleColor="#FFFFFF"
                />
              </View>
            </View>
          </View>
        );
      })}
    </ViewPager>
  );
}
