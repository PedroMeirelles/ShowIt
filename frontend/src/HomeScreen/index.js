import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import {
  MaterialIcons,
  FontAwesome5,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";
import styles from "./styles";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          placeholder="Pesquisar"
          style={styles.inputSearch}
          placeholderTextColor="white"
        ></TextInput>
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
    </View>
  );
}
