import * as React from "react";
import { View, Image } from "react-native";
import { Text, Card, Divider } from "@ui-kitten/components";
import { styles } from "../styles";

export function TxCardPositive({ image, txName, txTime, txAmount }) {
  return (
    <View style={([{ height: "10%" }], styles.shadow)}>
      <Card
        style={[
          {
            flex: 1,
            marginVertical: 5,
          },
          styles.round,
        ]}
      >
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.txRecordIcon} source={image} />
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.cardText}>{txName}</Text>
            <Text style={{ color: "#7F7F7F", fontSize: 12, marginTop: 3 }}>
              {txTime}
            </Text>
          </View>
          <Text
            style={{
              color: "#00B050", //FF0000
              fontSize: 20,
              fontWeight: "600",
              marginLeft: "auto",
              paddingTop: 8,
            }}
          >
            {txAmount}
          </Text>
        </View>
      </Card>
    </View>
  );
}

export function TxCardNegative({ image, txName, txTime, txAmount }) {
  return (
    <View style={([{ height: "10%" }], styles.shadow)}>
      <Card
        style={[
          {
            flex: 1,
            marginVertical: 5,
          },
          styles.round,
        ]}
      >
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.txRecordIcon} source={image} />
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.cardText}>{txName}</Text>
            <Text style={{ color: "#7F7F7F", fontSize: 12, marginTop: 5 }}>
              {txTime}
            </Text>
          </View>
          <Text
            style={{
              color: "#FF0000",
              fontSize: 20,
              fontWeight: "600",
              marginLeft: "auto",
              paddingTop: 8,
            }}
          >
            {txAmount}
          </Text>
        </View>
      </Card>
    </View>
  );
}

export function YearDivider({ year }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: "5%",
      }}
    >
      <Divider style={{ flex: 1 }} />
      <Text style={styles.blueDividerText}>{year}</Text>
      <Divider style={{ flex: 1 }} />
    </View>
  );
}
