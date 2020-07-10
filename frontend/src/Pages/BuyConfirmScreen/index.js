import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Logo from "../../assets/icon.png";
import QR from "../../assets/qrcode.jpg";
import styles from "./styles";

export default function BuyConfirmScreen({ navigation }) {
  function backToHome(event) {
    navigation.navigate("Home", { event });
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View style={styles.headerBox}>
        <Ionicons
          name="ios-arrow-back"
          size={32}
          color="#D48015"
          style={{ paddingLeft: 10 }}
          onPress={() => backToHome()}
        />
        <View>
          <Text style={{ color: "#D48015", fontSize: 28 }}>Sucesso!</Text>
        </View>
        <View style={{ width: 26 }}></View>
      </View>
      <View style={styles.textBox}>
        <Text style={{ color: "#fff", fontSize: 14 }}>
          Segue abaixo o QR Code referente ao seu ticket.
        </Text>
        <Image source={QR} style={{ height: 200, width: 200, marginTop: 20 }} />
      </View>
      <View style={styles.iconsBox}>
        <TouchableOpacity style={styles.iconText}>
          <Ionicons name="md-photos" size={40} color="#D48015" />
          <Text style={{ color: "#D48015" }}>Salvar na galeria</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconText}>
          <MaterialIcons name="email" size={40} color="#D48015" />
          <Text style={{ color: "#D48015" }}>Receber por e-mail</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
// https://expo.io/dashboard/pedrom_/builds/08c869fc-24b9-4d7c-8922-e05c1bd7ecb3
