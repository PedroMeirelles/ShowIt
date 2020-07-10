import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";

import api from "../../services/api";
import Logo from "../../assets/icon.png";
import styles from "./styles";

export default function TicketScreen({ navigation }) {
  const [events, setEvents] = useState([]);

  async function loadEvent() {
    try {
      const response = await api.get("ticket");
      setEvents([...response.data]);
    } catch (err) {
      console.log(err);
    }
  }

  function TicketDetails(event) {
    navigation.navigate("Info", { event });
  }

  useEffect(() => {
    loadEvent();
  }, [events]);

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image style={styles.logo} source={Logo} />
      </View>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Meus Tickets</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.flatlistBox}
        keyExtractor={(event) => String(event.id)}
        showsVerticalScrollIndicator={false}
        data={events}
        renderItem={({ item: event }) => (
          <TouchableOpacity onPress={() => TicketDetails(event)}>
            <View style={styles.flatlist}>
              <Image
                source={{
                  uri: event.imagem,
                }}
                style={{ height: 150, width: 300, borderRadius: 7 }}
              />
              <Text style={styles.flatlistName}>{event.nome}</Text>
              <View style={styles.flatlistInfo}>
                <Text>{event.cidade}, </Text>
                <Text>{event.data}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
