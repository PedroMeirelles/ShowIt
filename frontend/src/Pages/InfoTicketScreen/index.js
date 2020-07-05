import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import Logo from "../../assets/icon.png";
import QR from "../../assets/qrcode.jpg";
import styles from "./styles";

export default function InfoTicketScreen({ navigation }) {
  const route = useRoute();
  const ticket = route.params.event;

  function backToTickets(event) {
    navigation.navigate("Ticket", { event });
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
          onPress={() => backToTickets()}
        />
        <View>
          <Text style={styles.headerName}>{ticket.nome}</Text>
        </View>
        <View></View>
      </View>
      <View style={styles.iconsBox}>
        <View style={styles.dataBox}>
          <MaterialCommunityIcons
            name="calendar-blank-outline"
            size={44}
            color="#D48015"
          />
          <View style={styles.dataTextBox}>
            <Text style={{ color: "#fff", fontSize: 14 }}>{ticket.data}</Text>
            <Text style={{ color: "#fff", fontSize: 14 }}>
              {ticket.horario}
            </Text>
          </View>
        </View>
        <View style={styles.localBox}>
          <Feather name="map-pin" size={44} color="#D48015" />
          <Text
            style={{
              marginTop: 13,
              marginLeft: 5,
              fontSize: 14,
              color: "#fff",
            }}
          >
            {ticket.local}, {ticket.cidade}
          </Text>
        </View>
      </View>
      <View style={styles.qrCode}>
        <Text style={{ color: "#D48015", fontSize: 16 }}>
          Segue abaixo o QR Code referente ao seu ticket.
        </Text>
        <Image source={QR} style={{ height: 200, width: 200, top: 20 }} />
      </View>
    </View>
  );
}
