import * as React from "react";
import { Image, ImageBackground, View } from "react-native";
// import axios from "axios";
import { Button, Text, Input, CheckBox } from "@ui-kitten/components";
import { styles } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../slices/userSlice";
import { createWallet } from "../../slices/walletsSlice";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
const backgroundImage = "../../assets/images/background.png";
const logo = "../../assets/images/Logo_sw.png";

const useInputState = (initialValue = "") => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

export default function RegisterPage({ navigation }) {
  const dispatch = useDispatch();
  const hasSignedIn = useSelector((state) => state.user.hasSignedIn);
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    if (hasSignedIn) {
      dispatch(createWallet({ category: "P" }));
      navigation.navigate("Home");
    }
  }, [hasSignedIn]);

  const usernameInputState = useInputState();
  const passwordInputState = useInputState();
  const phoneInputState = useInputState();
  const verifyInputState = useInputState();

  const handleCreateAccount = () => {
    // let username = usernameInputState;
    // let data = {
    //   name: username,
    //   info: "",
    //   pp: {
    //     SN_LEN: 10,
    //     MAX_BAL: 10000,
    //     pka: "abc",
    //   },
    // };
    // console.log("check1");

    // axios
    //   .post("http://10.0.2.2:5000/create_wallet", data, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then((response) => {
    //     const responseData = response.data;
    //     console.log("Wallet created successfully!");
    //     console.log("Address: " + responseData.pk);
    //     console.log("Scret key: " + responseData.sk);
    //     console.log("Category: P");
    //     console.log("Currency: []");

    //     dispatch(
    //       createWallet({
    //         address: responseData.pk,
    //         paymentCode: responseData.pk,
    //         category: "P",
    //         currency: [],
    //       })
    //     );

    //     dispatch(
    //       createUser({
    //         username: usernameInputState,
    //         password: passwordInputState,
    //         phone: phoneInputState,
    //       })
    //     );
    //   })
    //   .catch((error) => {
    //     console.log("Error creating wallet:");
    //     console.log(error);
    //   });
    // navigation.navigate("Home");

    dispatch(
      createUser({
        username: usernameInputState.value,
        password: passwordInputState.value,
        phone: phoneInputState.value,
      })
    );
  };

  return (
    <ImageBackground
      source={require(backgroundImage)}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <View style={styles.logoView}>
        <Text style={styles.hearderText}>Create Account</Text>
        <Image
          style={{ width: "150%", height: "150%", resizeMode: "contain" }}
          source={require(logo)}
        />
      </View>

      <View style={styles.registerFormView}>
        <View style={styles.inputView}>
          <Input
            placeholder="Username"
            style={styles.input1}
            placeholderTextColor="white"
            textStyle={{ color: "white" }}
            {...usernameInputState}
          />
          <Input
            placeholder="Password"
            style={styles.input1}
            placeholderTextColor="white"
            textStyle={{ color: "white" }}
            secureTextEntry={true}
            {...passwordInputState}
          />

          <Input
            placeholder="Phone Number"
            accessoryRight={(ImageProps) => (
              <Text
                onPress={() => console.log("Send SMS!")}
                style={styles.blueLink}
              >
                Send Verification Code
              </Text>
            )}
            style={styles.input1}
            placeholderTextColor="white"
            textStyle={{ color: "white" }}
            {...phoneInputState}
          />
          <Input
            placeholder="Verification Code"
            style={styles.input2}
            placeholderTextColor="white"
            textStyle={{ color: "white" }}
            {...verifyInputState}
          />
        </View>
        <CheckBox
          checked={checked}
          onChange={(nextChecked) => setChecked(nextChecked)}
          style={styles.checkBox}
        >
          <Text style={styles.smallWhiteText}>I agree with the </Text>
          <Text
            onPress={() => navigation.navigate("TermsOfServices")}
            style={styles.whiteLink}
          >
            Terms of Service
          </Text>
        </CheckBox>
        <Button
          style={styles.button1}
          onPress={handleCreateAccount}
          children={(TextProps) => (
            <Text style={styles.blueText}>Create Account</Text>
          )}
        />
      </View>
    </ImageBackground>
  );
}
