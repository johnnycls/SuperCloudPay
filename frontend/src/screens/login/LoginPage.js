import * as React from "react";
import { Image, ImageBackground, View } from "react-native";
import { Button, Text, Input, CheckBox } from "@ui-kitten/components";
import { styles } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../slices/userSlice";

const backgroundImage = "../../assets/images/background.png";
const logo = "../../assets/images/Logo_w.png";

const useInputState = (initialValue = "") => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

export default function LoginPage({ navigation }) {
  const dispatch = useDispatch();
  const hasSignedIn = useSelector((state) => state.user.hasSignedIn);
  const [checked, setChecked] = React.useState(false);

  const usernameInputState = useInputState();
  const passwordInputState = useInputState();

  React.useEffect(() => {
    if (hasSignedIn) {
      navigation.navigate("Home");
    }
  }, [hasSignedIn]);

  return (
    <ImageBackground
      source={require(backgroundImage)}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <View style={styles.logoView}>
        <Image style={styles.logo} source={require(logo)} />
        <Text style={styles.logoText}>
          Privacy-Preserving Wallet in Cloud Era
        </Text>
      </View>

      <View style={styles.loginFormView}>
        <View style={styles.inputView}>
          <Input
            placeholder="Username/Phone Number"
            style={styles.input1}
            placeholderTextColor="white"
            textStyle={{ color: "white" }}
            {...usernameInputState}
          />
          <Input
            placeholder="Password"
            secureTextEntry={true}
            accessoryRight={(ImageProps) => (
              <Text
                onPress={() => console.log("Forgot password!")}
                style={styles.whiteLink}
              >
                Forgot Password
              </Text>
            )}
            style={styles.input2}
            placeholderTextColor="white"
            textStyle={{ color: "white" }}
            {...passwordInputState}
          />
        </View>
        <Button
          style={styles.button1}
          onPress={() => {
            dispatch(
              login({
                username: usernameInputState.value,
                password: passwordInputState.value,
              })
            );
          }}
          children={(TextProps) => <Text style={styles.blueText}>Login</Text>}
        />
        <Button
          appearance="outline"
          style={styles.button2}
          onPress={() => navigation.navigate("Register")}
          children={(TextProps) => (
            <Text style={styles.whiteText}>Register</Text>
          )}
        />
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
        {/* <Button
          appearance="outline"
          style={styles.button2}
          onPress={() => navigation.navigate("Home")}
          children={(TextProps) => (
            <Text style={styles.whiteText}>HomePage</Text>
          )}
        /> */}
      </View>
    </ImageBackground>
  );
}
