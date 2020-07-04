import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  MaterialIcons,
  FontAwesome5,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";
import styles from "./styles";
import api from "../../services/api";

export default function HomeScreen({ navigation }) {
  const [events, setEvents] = useState([]);

  async function loadEvent() {
    try {
      const response = await api.get("events");
      setEvents([...events, ...response.data]);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadEvent();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <View style={styles.header}>
          <AntDesign
            name="search1"
            size={24}
            color="#2F2E2E"
            style={{ marginTop: 4 }}
          />
          <TextInput
            placeholder="Pesquisar"
            style={styles.inputSearch}
            placeholderTextColor="white"
          ></TextInput>
        </View>
      </View>
      <View style={styles.categoryContainer}>
        <View style={styles.categoryBox}>
          <TouchableOpacity style={styles.categoryButton}>
            <MaterialIcons name="computer" size={16} color="#fff" />
            <Text style={styles.textButton}>Tecnologia</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <FontAwesome5 name="theater-masks" size={16} color="#fff" />
            <Text style={styles.textButton}>Teatro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <FontAwesome5 name="compact-disc" size={16} color="#fff" />
            <Text style={styles.textButton}>Festas</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoryBox}>
          <TouchableOpacity style={styles.categoryButton}>
            <Entypo name="modern-mic" size={16} color="#fff" />
            <Text style={styles.textButton}>Palestras</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <FontAwesome5 name="laugh-squint" size={16} color="#fff" />
            <Text style={styles.textButton}>Comédia</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.textButton}>Outros</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.titleBox}>
        <Text style={styles.titleEvents}>Eventos próximos a você</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.flatlistBox}
        keyExtractor={(event) => String(event.id)}
        showsVerticalScrollIndicator={false}
        data={events}
        renderItem={({ item: event }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Details")}>
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
