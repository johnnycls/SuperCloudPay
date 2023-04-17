import "react-native-gesture-handler";
import React from "react";
import * as eva from "@eva-design/eva";
import { store } from "./src/app/store";
import { Provider } from "react-redux";
import Routes from "./src/app/Routes";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { default as mapping } from "./src/mapping.json";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { View } from "react-native";

export default () => {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  React.useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
          "Poppins-Regular": require("./assets/font_Poppins/Poppins-Regular-400.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light} customMapping={mapping}>
        <View
          onLayout={onLayoutRootView}
          style={{ width: "100%", height: "100%" }}
        >
          <Routes />
        </View>
      </ApplicationProvider>
    </Provider>
  );
};
