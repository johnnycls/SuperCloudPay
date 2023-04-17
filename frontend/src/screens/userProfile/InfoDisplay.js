import * as React from "react";
import { View } from "react-native";
import { Text } from "@ui-kitten/components";
import { styles } from "../styles";

export default function InfoDisplay({ attribute, information }) {
  return (
    <View style={styles.tableRow}>
      <View style={styles.tableAttributes}>
        <Text style={styles.grayText}>{attribute}</Text>
      </View>
      <View style={styles.tableInfo}>
        <Text style={styles.grayText}>{information}</Text>
      </View>
    </View>
  );
}
