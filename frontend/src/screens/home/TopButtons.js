import * as React from "react";
import { Image, View, ImageBackground } from "react-native";
import { Button } from "@ui-kitten/components";

const backgroundImage = "../../assets/images/background.png";

export default function TopButtons({ navigation, pageName }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <ImageBackground
        source={require(backgroundImage)}
        resizeMode="cover"
        style={styles.imageBackground}
        imageStyle={styles.roundCorner}
      >
        <Button
          accessoryLeft={() => (
            <Image source={require("../../assets/icons/menu.png")} />
          )}
          appearance="ghost"
          onPress={() => navigation.toggleDrawer()}
        />
        <Button
          accessoryLeft={() => (
            <Image source={require("../../assets/icons/bell.png")} />
          )}
          appearance="ghost"
        />
      </ImageBackground>
    </View>
  );
}
