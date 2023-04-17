import * as React from "react";
import {
  Layout,
  Drawer,
  DrawerItem,
  IndexPath,
  Text,
  Icon,
} from "@ui-kitten/components";
import { ImageBackground } from "react-native";
import SideBarHeader from "./SideBarHeader";
import { styles } from "../styles";

const SIDEBAR_ITEMS = [
  // { title: "Transaction History", route: "TxRecord" },
  {
    title: "My Profile",
    accessoryLeft: "person-outline",
    route: "UserProfile",
  },
  {
    title: "Help Center",
    accessoryLeft: "question-mark-circle-outline",
    route: "Home",
  },
  {
    title: "Settings",
    accessoryLeft: "settings-outline",
    route: "Home",
  },
  {
    title: "Logout",
    accessoryLeft: "log-out-outline",
    route: "Login",
  },
];

const backgroundImage = "../../assets/images/background.png";

export default function SideBar({ navigation }) {
  return (
    <ImageBackground
      source={require(backgroundImage)}
      resizeMode="cover"
      style={{
        width: "100%",
        height: "100%",
        // paddingTop: StatusBar.currentHeight,
      }}
    >
      {/* <Layout style={{ width: "100%", height: "100%" }}> */}
      <Drawer
        header={() => <SideBarHeader navigation={navigation} />}
        selectedIndex={new IndexPath(0)}
        onSelect={(index) =>
          navigation.navigate(SIDEBAR_ITEMS[index.row].route)
        }
        style={{ backgroundColor: "rgba(0,0,0,0)" }}
      >
        {SIDEBAR_ITEMS.map((item) => (
          <DrawerItem
            style={{
              backgroundColor: "rgba(0,0,0,0)",
              color: "white",
              height: 50,
            }}
            key={item.title}
            accessoryLeft={(IconProps) => (
              <Icon style={styles.sidebarIcon} name={item.accessoryLeft}></Icon>
            )}
            title={(TextProps) => (
              <Text
                style={[
                  styles.whiteText,
                  { paddingLeft: 10, width: "100%", textAlign: "left" },
                ]}
              >
                {item.title}
              </Text>
            )}
          />
        ))}
      </Drawer>
      {/* </Layout> */}
    </ImageBackground>
  );
}
