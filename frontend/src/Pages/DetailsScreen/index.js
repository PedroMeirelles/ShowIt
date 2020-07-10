import React from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import styles from "./styles";

export default function DetailsScreen({ navigation }) {
  const route = useRoute();
  const ticket = route.params.event;

  function backToHome() {
    navigation.navigate("Home");
  }

  function goToCard(ticket) {
    navigation.navigate("Card", { ticket });
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Image
            source={{ uri: ticket.imagem }}
            style={{ height: 280, width: "100%" }}
          />
        </View>
        <View style={styles.titleBox}>
          <View>
            <Ionicons
              name="ios-arrow-back"
              size={32}
              color="#D48015"
              style={{ paddingLeft: 10 }}
              onPress={() => backToHome()}
            />
          </View>
          <View>
            <Text style={styles.descriptionHead}>Descrição:</Text>
          </View>
          <View />
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>{ticket.descricao}</Text>
        </View>
        <View style={styles.iconsBox}>
          <View style={styles.dataBox}>
            <View>
              <MaterialCommunityIcons
                name="calendar-blank-outline"
                size={44}
                color="#D48015"
              />
            </View>
            <View style={styles.dataTextBox}>
              <View>
                <Text style={styles.dataText}>{ticket.data}</Text>
              </View>
              <View>
                <Text style={styles.dataText}>{ticket.horario}</Text>
              </View>
            </View>
          </View>
          <View style={styles.dataBox}>
            <View>
              <Feather name="map-pin" size={44} color="#D48015" />
            </View>
            <View style={styles.dataTextBox}>
              <View>
                <Text style={{ marginTop: 10, color: "#fff" }}>
                  {ticket.local}, {ticket.cidade}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.dataBox}>
            <View>
              <MaterialCommunityIcons
                name="cash-usd"
                size={44}
                color="#D48015"
              />
            </View>
            <View style={styles.dataTextBox}>
              <View>
                <Text style={{ marginTop: 10, color: "#fff" }}>
                  {ticket.valor}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.buttonBox}>
            <TouchableOpacity
              style={styles.buyButton}
              onPress={() => goToCard(ticket)}
            >
              <Text style={{ color: "#fff", fontSize: 16 }}>Comprar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
