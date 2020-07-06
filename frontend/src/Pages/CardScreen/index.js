import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Logo from "../../assets/icon.png";
import styles from "./styles";

export default function CardScreen({ navigation }) {
  function confirmationBuy() {
    navigation.navigate("Confirm");
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View style={styles.cardInfoBox}>
        <View style={styles.inputLargeBox}>
          <TextInput
            style={styles.largeInput}
            placeholder="Número do cartão"
            placeholderTextColor="#fff"
          />
        </View>
        <View style={styles.inputSmallBox}>
          <View>
            <TextInput
              placeholderTextColor="#fff"
              placeholder="Validade"
              style={styles.inputSmall}
            />
          </View>
          <View>
            <TextInput
              placeholderTextColor="#fff"
              placeholder="CVV"
              style={styles.inputSmall}
            />
          </View>
        </View>
        <View style={styles.inputLargeBox}>
          <TextInput
            style={styles.largeInput}
            placeholder="Nome do titular"
            placeholderTextColor="#fff"
          />
        </View>
        <View style={styles.inputLargeBox}>
          <TextInput
            style={styles.largeInput}
            placeholder="CPF"
            placeholderTextColor="#fff"
          />
        </View>
      </View>
      <View style={styles.buyButtonBox}>
        <TouchableOpacity
          style={styles.buyButton}
          onPress={() => confirmationBuy()}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
