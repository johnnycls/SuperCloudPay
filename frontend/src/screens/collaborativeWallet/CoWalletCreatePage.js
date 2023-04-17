import * as React from "react";
import {
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { styles } from "../styles";
import {
  Button,
  Text,
  Card,
  Input,
  IndexPath,
  Select,
  SelectItem,
} from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";

const backgroundImage = "../../assets/homepage_images/page_background.png";

const walletTypes = ["Personal Wallet", "Shared wallet", "Organization wallet"];

const useInputState = (initialValue = "") => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

export default function PromisePage({ navigation }) {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);


  const walletName_InputState = useInputState();
  const consensus_InputState = useInputState();
  const description_InputState = useInputState();
  const [selectedIndex1, setSelectedIndex1] = React.useState(new IndexPath(0));

  const displayWalletValue = walletTypes[selectedIndex1.row];

  const renderOption = (title) => <SelectItem title={title} />;

  return (
    <ImageBackground
      source={require(backgroundImage)}
      resizeMode="cover"
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
      }}
    >
      {/* Header 0.14vh*/}
      <View style={styles.hearderView}>
        <View style={styles.headerBox}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.headerText}>Create Co-Wallet</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Body */}
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "83%",
          width: "90%",
          paddingTop: 15,
        }}
      >
        {/* Wallet Info */}
        <View
          style={[
            {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              height: "25%",
            },
            styles.shadow,
          ]}
        >
          <Card style={styles.round}>
            {/* Wallet Name */}
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={[{ width: "30%" }, styles.cardText]}>Name</Text>
              <Input
                style={[styles.input, { width: "70%" }]}
                size="medium"
                placeholder="Wallet Name"
                {...walletName_InputState}
              />
            </View>
            {/* Wallet Type */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 10,
              }}
            >
              <Text style={[{ width: "30%" }, styles.cardText]}>
                Wallet Type
              </Text>
              <Select
                style={[{ width: "70%" }, styles.select]}
                placeholder="Default"
                value={displayWalletValue}
                selectedIndex={selectedIndex1}
                onSelect={(index) => setSelectedIndex1(index)}
              >
                {walletTypes.map(renderOption)}
              </Select>
            </View>

            {/* Creator */}
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 10,
              }}
            >
              <Text style={[{ width: "30%" }, styles.cardText]}>Creator</Text>
              <Input
                style={[styles.input, { width: "70%" }]}
                size="medium"
                disabled={true}
                placeholder={username}
                {...walletName_InputState}
              />
            </View>
          </Card>
        </View>

        {/* Consensus */}
        <View
          style={[
            {
              height: "25%",
            },
            styles.shadow,
          ]}
        >
          <Card
            style={[
              {
                borderWidth: 0,
                borderRadius: 15,
                height: "100%",
              },
              styles.shadow,
            ]}
          >
            <Text
              style={{
                paddingTop: 5,
                paddingBottom: 18,
                color: "#595959",
                fontWeight: "bold",
                fontSize: 24,
                textAlign: "center",
              }}
            >
              Wallet Consensus Logic
            </Text>

            <Input
              multiline={true}
              textStyle={{ minHeight: "50%" }}
              placeholder="The consensus logic should be boolean satisfiable."
              {...consensus_InputState}
            />
          </Card>
        </View>
        {/* Description */}
        <View
          style={[
            {
              height: "30%",
            },
            styles.shadow,
          ]}
        >
          <Card
            style={[
              {
                borderWidth: 0,
                borderRadius: 15,
                height: "100%",
              },
              styles.shadow,
            ]}
          >
            <Text
              style={{
                paddingTop: 5,
                paddingBottom: 18,
                color: "#595959",
                fontWeight: "bold",
                fontSize: 24,
                textAlign: "center",
              }}
            >
              Wallet Description
            </Text>

            <Input
              multiline={true}
              textStyle={{ minHeight: "50%" }}
              placeholder="Description"
              {...description_InputState}
            />
          </Card>
        </View>

        {/* Request */}
        <View
          style={[
            {
              height: "8%",
            },
            styles.shadow,
          ]}
        >
          <LinearGradient
            colors={["#83EAF1", "#63A4FF"]}
            start={{ x: 1.0, y: 1.0 }}
            end={{ x: 0.0, y: 0.0 }}
            style={{
              borderRadius: 15,
            }}
          >
            <Button
              style={{
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "rgba(0,0,0,0)",
              }}
              children={(TextProps) => (
                <Text style={styles.functionButtonText}>Create</Text>
              )}
              onPress={() => {
                Alert.alert(
                  "Wallet is created successfully!",
                  "Please check the collaborative wallet dashboard."
                );
              }}
            />
          </LinearGradient>
        </View>
      </View>
    </ImageBackground>
  );
}
