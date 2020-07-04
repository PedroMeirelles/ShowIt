import React from "react";
import { View, Text, Image } from "react-native";
import {
  MaterialIcons,
  FontAwesome5,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";
import Logo from "../../assets/icon.png";
import styles from "./styles";

export default function TicketScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image style={styles.logo} source={Logo} />
      </View>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Meus tickets</Text>
      </View>
    </View>
  );
}
