import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import BillPaymentPage from "../screens/billPayment/BillPaymentPage";
import BillSplittingPage from "../screens/billSplitting/BillSplittingPage";
import HomePage from "../screens/home/HomePage";
import WalletPage from "../screens/home/WalletPage";
import LoginPage from "../screens/login/LoginPage";
import PaymentCodePage from "../screens/paymentCode/PaymentCodePage";
import PromisePage from "../screens/promise/PromisePage";
import RegisterPage from "../screens/register/RegisterPage";
import SendPage from "../screens/transfer/SendPage";
import ReceivePage from "../screens/transfer/ReceivePage";
import SideBar from "../screens/general/SideBar";
import TermsOfServicesPage from "../screens/termsOfServices/TermsOfServicesPage";
import TxRecordPage from "../screens/txRecord/TxRecordPage";
import UserProfilePage from "../screens/userProfile/UserProfilePage";
import ScanPage from "../screens/scan/ScanPage";
import WithdrawalPage from "../screens/withdrawal/WithdrawalPage";
import TopUpPage from "../screens/topUp/TopUpPage";
import CoWalletCreatePage from "../screens/collaborativeWallet/CoWalletCreatePage";
import CoWalletDisplayPage from "../screens/collaborativeWallet/CoWalletDisplayPage";
import CoWalletRequestPage from "../screens/collaborativeWallet/CoWalletRequestPage";
import AddressInputPage from "../screens/transfer/AddressInputPage";
import ContactsPage from "../screens/transfer/ContactsPage";
import { styles } from "../screens/styles";

//icons------
import { MaterialCommunityIcons, Ionicons, Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
//-----------

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

function DrawerNavigatorHome() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <SideBar {...props} />}
      initialRouteName="HomeDrawer"
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="HomeDrawer" component={HomePage} />
    </Drawer.Navigator>
  );
}

function DrawerNavigatorUserProfile() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <SideBar {...props} />}
      initialRouteName="UserProfileDrawer"
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="UserProfileDrawer" component={UserProfilePage} />
    </Drawer.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={DrawerNavigatorHome} />
      <HomeStack.Screen name="UserProfile" component={UserProfilePage} />
      <HomeStack.Screen name="Promise" component={PromisePage} />
      <HomeStack.Screen name="CoWallet" component={CoWalletDisplayPage} />
      <HomeStack.Screen
        name="Send"
        component={SendPage}
        initialParams={{ scanValue: "" }}
      />
      <HomeStack.Screen name="Receive" component={ReceivePage} />
      <HomeStack.Screen name="TopUp" component={TopUpPage} />
      <HomeStack.Screen name="Withdraw" component={WithdrawalPage} />
      <HomeStack.Screen name="BillPayment" component={BillPaymentPage} />
      <HomeStack.Screen name="CreateCoWallet" component={CoWalletCreatePage} />
      <HomeStack.Screen
        name="RequestCoWallet"
        component={CoWalletRequestPage}
      />
      <HomeStack.Screen name="ShowCoWallet" component={CoWalletDisplayPage} />
    </HomeStack.Navigator>
  );
}

// Bottom Navigation
function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      shifting={true}
      activeColor="#48cae4" //"#e91e63"
      inactiveColor="#D0CECE"
      labelStyle={{ fontSize: 12 }}
      barStyle={[
        // { backgroundColor: "#F2F2F2", marginBottom: -30 },
        { backgroundColor: "white", marginBottom: -30, height: 100 },
        styles.shadow,
      ]}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "red",
      })}
    >
      <Tab.Screen
        name="TxRecord"
        component={TxRecordPage}
        options={{
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "red",
          tabBarLabel: "Tx History",
          tabBarColor: "#f8f8f8",
          // tabBarBadge: "3",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="clipboard-text-clock"
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Scan"
        component={ScanPage}
        tabBarColor="green"
        options={{
          tabBarLabel: "Scan",
          tabBarColor: "#f8f8f8",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="line-scan" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="HomeTab"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarColor: "#f8f8f8",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Pay"
        component={PaymentCodePage}
        options={{
          tabBarLabel: "Pay",
          tabBarColor: "#f8f8f8",
          tabBarIcon: ({ color }) => (
            <Ionicons name="qr-code-sharp" size={26} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Wallet"
        component={WalletPage}
        options={{
          tabBarLabel: "Wallet",
          tabBarColor: "#f8f8f8",
          tabBarIcon: ({ color }) => (
            <Ionicons name="wallet" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login" //change this
        screenOptions={{ headerShown: false }}
      >
        {/* <Stack.Screen name="BillSplitting" component={BillSplittingPage} />
        <Stack.Screen name="BillPayment" component={BillPaymentPage} /> */}
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="Login" component={LoginPage} />
        {/* <Stack.Screen name="PaymentCode" component={PaymentCodePage} />
        <Stack.Screen name="Promise" component={PromisePage} /> */}
        <Stack.Screen name="Register" component={RegisterPage} />
        {/* <Stack.Screen name="Send" component={SendPage} />
        <Stack.Screen name="Receive" component={ReceivePage} /> */}
        <Stack.Screen name="TermsOfServices" component={TermsOfServicesPage} />
        <Stack.Screen name="AddressInput" component={AddressInputPage} />
        <Stack.Screen name="Contacts" component={ContactsPage} />
        {/* <Stack.Screen name="TxRecord" component={TxRecordPage} />
        <Stack.Screen name="Scan" component={ScanPage} />
        <Stack.Screen name="Withdraw" component={WithdrawalPage} />
        <Stack.Screen name="TopUp" component={TopUpPage} /> */}
        {/* <Stack.Screen name="CreateCoWallet" component={CoWalletCreatePage} />
        <Stack.Screen name="RequestCoWallet" component={CoWalletRequestPage} />
        <Stack.Screen name="ShowCoWallet" component={CoWalletDisplayPage} /> */}
        {/* <Stack.Screen
          name="UserProfile"
          component={DrawerNavigatorUserProfile}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
