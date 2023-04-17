import * as React from "react";
import {
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  View,
} from "react-native";
import { Text, Button, CheckBox } from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../styles";

const backgroundImage = "../../assets/homepage_images/page_background.png";

export default function TermsOfServicesPage({ navigation }) {
  const [checked, setChecked] = React.useState(false);

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
            <Text style={styles.headerText}>Terms of Service</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Body */}
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          height: "83%",
          width: "90%",
          paddingTop: 15,
        }}
      >
        <ScrollView style={styles.termOfServicesView}>
          <Text>
            <Text style={{ color: "black" }}>1. TERMS AND CONDITIONS</Text>{" "}
            {"\n"}
            These Terms and Conditions (“T&Cs”) are effective from 17 September
            2018 for all customers. The last updates were made on 16 September
            2021. {"\n"}
            {"\n"}
            <Text style={{ color: "black" }}>. INTRODUCTION</Text> {"\n"}
            2.1 These T&Cs constitute a legally binding agreement between you
            (as a SUPERCLOUDPAY's customer), and SUPERCLOUDPAY (Asia) Limited
            (“SUPERCLOUDPAY”), the owner and operator of the SUPERCLOUDPAY
            Wallet (“SUPERCLOUDPAY Wallet”) in Hong Kong operating under a
            stored value facilities license number SVF0003 granted by Hong Kong
            Monetary Authority (“HKMA”) with effect from 25 August 2016, in
            respect of the use of your SUPERCLOUDPAY Wallet. SUPERCLOUDPAY
            Wallet or any product / consumer item incorporating its technology
            and / or any electronic wallet incorporating its technology shall be
            referred to as “SUPERCLOUDPAY Wallet,” “SUPERCLOUDPAY Account” or
            “SUPERCLOUDPAY System” below. “SUPERCLOUDPAY Wallet” and
            “SUPERCLOUDPAY Account” shall have the same meaning and be used
            interchangeably in these T&Cs. By using SUPERCLOUDPAY Wallet, you
            agree to be bound by these T&Cs. {"\n"}
            {"\n"}
            2.2 These T&Cs govern and explain SUPERCLOUDPAY's obligations to you
            and yours to SUPERCLOUDPAY. While they shall apply to all
            SUPERCLOUDPAY's services, they may be complemented or changed by
            particular terms and conditions for certain services which you may
            use. You agree that you have no claim against SUPERCLOUDPAY for any
            statement which is not explicitly set out in these T&Cs. {"\n"}
            {"\n"}
            2.3 In these T&Cs, the following words and expressions shall, where
            the context permits, have the following meanings: {"\n"}
            (a) “Authorised Add Value Service Provider” is a Service Provider
            (defined below) that SUPERCLOUDPAY has authorised to offer the
            service of adding value to your SUPERCLOUDPAY Wallet in return for
            cash or other consideration; {"\n"}
            (b) “Authorised Cash Withdrawal Service Provider” is a Service
            Provider (defined below) that SUPERCLOUDPAY has authorised to offer
            the service of cash withdrawal from your SUPERCLOUDPAY Wallet; and
            {"\n"}
            (c) “HKMA” means Hong Kong Monetary Authority; {"\n"}
            (d) “Hong Kong” means the Hong Kong Special Administrative Region,
            the People's Republic of China; {"\n"}
            (e) “Service Provider” means any bank, financial services provider
            or company, money changer (bureau de change), payment gateway,
            transport operator, retailer, entertainment / recreation facilities
            provider, sports establishment, educational establishment, building
            access control provider, unattended service (such as vending machine
            / kiosk / photo booth / telephone booth) or other parties which
            offer their services to you with respect to your SUPERCLOUDPAY
            Wallet, and are approved by SUPERCLOUDPAY. These Service Providers
            should display the SUPERCLOUDPAY acceptance logo clearly. {"\n"}
            {"\n"}
            2.4 All the value stored on your SUPERCLOUDPAY Wallet shall, to the
            extent not paid to SUPERCLOUDPAY (for its own account), you or
            another person in accordance with these T&Cs, be “Client Money”
            which SUPERCLOUDPAY shall hold in one or more account(s) (the “Trust
            Account(s)”) opened by SUPERCLOUDPAY with one or more bank(s)
            licensed by the HKMA. {"\n"}
            {"\n"}
            2.5 The Client Money in each of the Trust Account(s) shall be held
            by SUPERCLOUDPAY on trust for you and SUPERCLOUDPAY's other
            customers pursuant to a declaration of trust by SUPERCLOUDPAY in
            favour of you and SUPERCLOUDPAY's other customers. {"\n"}
            {"\n"}
            2.6 You agree that SUPERCLOUDPAY may: -{"\n"}
            (a) retain for its own account any or all interests accruing or
            accrued on each of the Trust Account(s); {"\n"}
            (b) debit Client Money to any of the Trust Account(s) and pay the
            same to you or to a payee authorised by you, in each case (i)
            pursuant to your instruction given in accordance with these T&Cs;
            and (ii) to the extent that the amount of a payment out of a Trust
            Account to you or to a payee authorised by you does not exceed the
            amount of Client Money then beneficially owned by you; and{"\n"}
            (c) SUPERCLOUDPAY may use any Client Money recorded in
            SUPERCLOUDPAY's records as owned by you, by debiting the same to any
            of the Trust Accounts(s) and transferring the debited amount to any
            account of SUPERCLOUDPAY with any bank, for the purpose of paying to
            SUPERCLOUDPAY any amount which these T&Cs require you to pay to
            SUPERCLOUDPAY by way of a fee or reimbursement of expense or for any
            other purpose. {"\n"}
            {"\n"}
            2.7 All Client Money recorded in SUPERCLOUDPAY's records as
            referable to a specific mobile telephone number shall be deemed to
            be owned, at any time, by {"\n"}
            (i) the person who at that time is recorded in the relevant mobile
            telephone network operator's records as the customer in respect of
            that number (for a contract customer); or {"\n"}
            (ii) the person whom SUPERCLOUDPAY identifies as the purchaser of
            the SIM card referable to that number, from the proof of purchase,
            or if such proof cannot be produced, in such other way as
            SUPERCLOUDPAY determines to be appropriate (for a customer linked to
            a prepaid SIM card). {"\n"}
            {"\n"}
            <Text styles={{ color: "black" }}>3.GENERAL</Text> {"\n"}
            3.1 SUPERCLOUDPAY offers a non-physical SUPERCLOUDPAY Wallet with
            full SUPERCLOUDPAY functionalities which can be accessed through the
            downloadable SUPERCLOUDPAY mobile application (“SUPERCLOUDPAY mobile
            app”). SUPERCLOUDPAY shall be entitled to assume that any
            instruction to deal with any Client Money belonging to you which is
            (i) received by SUPERCLOUDPAY through the SUPERCLOUDPAY mobile app;
            and (ii) appears to SUPERCLOUDPAY to have been generated by a person
            having access to the mobile telephone number which SUPERCLOUDPAY's
            records associate with you, is an instruction given by you and can
            accordingly be acted on by SUPERCLOUDPAY, whether or not such
            instruction was actually given by you or any other person
            beneficially entitled to Client Money recorded by SUPERCLOUDPAY as
            belonging to you. {"\n"}
            {"\n"}
            3.2 SUPERCLOUDPAY System provides you, if you are the owner of a
            valid SUPERCLOUDPAY Wallet, with the ability to pay for certain
            goods and services using the value stored in your SUPERCLOUDPAY
            Wallet where you see the SUPERCLOUDPAY acceptance logo at any
            SUPERCLOUDPAY's Service Provider. {"\n"}
            {"\n"}
            3.3 A Service Provider can be identified by their clear display of
            the SUPERCLOUDPAY acceptance logo. Please contact the Service
            Provider or SUPERCLOUDPAY if the Service Provider does not accept
            your SUPERCLOUDPAY Wallet as payment for their goods and/or
            services. {"\n"}
            {"\n"}
            3.4 The Service Providers are responsible for all aspects of the
            goods and/or services they provide to you. In using their services
            and/or facilities you should abide by their rules, regulations,
            policies and by-laws. SUPERCLOUDPAY has no responsibility for the
            Service Providers' goods and/or services and you should direct any
            enquiries relating to these matters to the relevant Service
            Provider. {"\n"}
            {"\n"}
            3.5 Under normal circumstances, SUPERCLOUDPAY will make reasonable
            efforts to ensure that SUPERCLOUDPAY System is operating, but
            SUPERCLOUDPAY cannot guarantee that a Service Provider will be able
            to accept a SUPERCLOUDPAY payment as this depends on the Service
            Provider's own systems and operations as well as network,
            electrical, climatic and other conditions or circumstances which are
            beyond SUPERCLOUDPAY's sole control. {"\n"}
            {"\n"}
            3.6 SUPERCLOUDPAY reserves the right to charge a reasonable fee for
            any SUPERCLOUDPAY payment service and other services SUPERCLOUDPAY
            provides to you. {"\n"}
            {"\n"}
            3.7 You may transfer money using the value stored on your
            SUPERCLOUDPAY Wallet to other SUPERCLOUDPAY Wallets, or receive
            transfer of money from another SUPERCLOUDPAY Wallet. SUPERCLOUDPAY
            accepts no responsibility for any dispute arising from such money
            transfers between you and any transferee, or between you and any
            transferor, save for technical malfunctions of SUPERCLOUDPAY System
            which caused errors in such transfers, in which case, you should
            contact SUPERCLOUDPAY in accordance with Condition 8 immediately.{" "}
            {"\n"}
            {"\n"}
            3.8 SUPERCLOUDPAY may offer rewards, promotions or special offers
            (collectively, “Promotions”) from time to time. Such Promotions are
            subject to terms and conditions imposed by SUPERCLOUDPAY relating to
            the Promotions, and SUPERCLOUDPAY reserves the right to final
            decision in the event of any disputes or disagreements.
          </Text>
        </ScrollView>
        <View style={[styles.bottomBox, { marginLeft: -30 }]}>
          <CheckBox
            checked={checked}
            onChange={(nextChecked) => setChecked(nextChecked)}
            style={styles.checkBox}
          >
            <Text style={styles.smallBlackText}>
              I agree with the "Terms of Service".
            </Text>
          </CheckBox>
        </View>
        {/* Request to join other wallet Button */}
        <View
          style={[
            {
              height: "8%",
              width: "100%",
              marginTop: 15,
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
                <Text style={styles.functionButtonText}>Continue</Text>
              )}
              onPress={() => {
                navigation.navigate("Register");
              }}
            />
          </LinearGradient>
        </View>
      </View>
    </ImageBackground>
  );
}
