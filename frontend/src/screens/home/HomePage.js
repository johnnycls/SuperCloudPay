import * as React from "react";
import { ImageBackground, View } from "react-native";
import TopButtons from "../general/TopButtons";
import WalletViewPager from "./WalletViewPager";
import Buttons from "./Buttons";
import { getWallets } from "../../slices/walletsSlice";
import { getAssets } from "../../slices/assetsSlice";
import { getCurrencies } from "../../slices/currenciesSlice";
import { getConversions } from "../../slices/conversionsSlice";
import { useDispatch } from "react-redux";
import { retrieveUser } from "../../slices/userSlice";
import { getTransactions } from "../../slices/transactionsSlice";

const backgroundImage = "../../assets/homepage_images/homepage_background.png";

export default function HomePage({ navigation, isHome }) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(retrieveUser());
    dispatch(getConversions({}));
    dispatch(getCurrencies({}));
    dispatch(getWallets({}));
    dispatch(getAssets({}));
    dispatch(getTransactions({}));
  }, []);

  return (
    <ImageBackground
      source={require(backgroundImage)}
      resizeMode="cover"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <View style={{ height: "15%" }}>
        <TopButtons navigation={navigation} pageName={""} />
      </View>

      <View
        style={{
          height: "21%",
          width: "98%",
          alignSelf: "center",
        }}
      >
        <WalletViewPager />
      </View>

      <View
        style={{
          height: "60%",
          width: "90%",
          alignSelf: "center",
          paddingTop: 15,
        }}
      >
        <Buttons navigation={navigation} />
      </View>
    </ImageBackground>
  );
}
