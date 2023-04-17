import * as React from "react";
import {
  Image,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles";

const backgroundImage = "../../assets/images/background.png";
const sideBarIcon = "../../assets/icons/menu.png";
const messageIcon = "../../assets/icons/bell.png";

export default function TopButtons({ navigation, pageName }) {
  return (
    <View style={styles.hearderView}>
      <View style={styles.headerBox}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.toggleDrawer()}
        >
          <Image
            style={[styles.whiteIcon, { marginLeft: 10 }]}
            source={require(sideBarIcon)}
          />
        </TouchableOpacity>
        <Text style={styles.hearderText}>{pageName}</Text>

        <TouchableOpacity style={styles.iconButton} onPress={() => {}}>
          <Image
            style={[styles.whiteIcon, { marginLeft: -10 }]}
            source={require(messageIcon)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
