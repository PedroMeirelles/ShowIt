import React from "react";
import { Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import image from "../../assets/icon.png";
import api from "../../services/api";
import styles from "./styles";

export default function LoginScreen({ navigation }) {
  function goToSignUp() {
    navigation.navigate("Signup");
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image source={image} style={{ height: 300, width: 300 }} />
      </View>
      <View style={styles.inputBox}>
        <View style={styles.inputBack}>
          <AntDesign
            name="user"
            size={24}
            color="#2F2E2E"
            style={{ marginTop: 3, marginRight: 3 }}
          />
          <TextInput
            placeholderTextColor="white"
            style={styles.input}
            placeholder="E-mail"
          />
        </View>
        <View style={styles.inputBack}>
          <AntDesign
            name="lock"
            size={24}
            color="#2F2E2E"
            style={{ marginTop: 3, marginRight: 3 }}
          />
          <TextInput
            placeholderTextColor="white"
            style={styles.input}
            placeholder="Senha"
          />
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View style={styles.forgotPass}>
          <TouchableOpacity>
            <Text style={{ color: "#fff", fontSize: 16 }}>
              Esqueci minha senha
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonBox}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "#fff", fontSize: 16 }}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signUpBox}>
        <Text style={{ color: "#fff", fontSize: 16 }}>
          Não possui uma conta?
        </Text>
        <TouchableOpacity style={styles.signUpButton}>
          <Text
            style={{ color: "#D48015", fontSize: 16 }}
            onPress={() => goToSignUp()}
          >
            Cadastrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
