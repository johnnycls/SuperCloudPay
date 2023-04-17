import * as React from "react";
import { View, Image } from "react-native";
import { Text, Card } from "@ui-kitten/components";
import { styles } from "../styles";

export function PaymentMethod({ image, payMethod, text }) {
  return (
    <View style={[{ width: "100%" }, styles.shadow]}>
      <Card style={styles.round}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={[styles.txRecordIcon, { marginTop: 13, marginRight: 20 }]}
            source={image}
          />
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              {payMethod}
            </Text>

            <Text style={{ fontSize: 12, color: "#7F7F7F", marginTop: 3 }}>
              Default payment {text}
            </Text>
          </View>
        </View>
      </Card>
    </View>
  );
}
