import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  Button,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import image from "../../assets/icon.png";
import api from "../../services/api";
import styles from "./styles";

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passconfirm, setPassconfirm] = useState("");

  function goToLogin() {
    navigation.navigate("Login");
  }

  async function handleSubmit() {
    const data = {
      name: name,
      email: email,
      password: password,
    };
    try {
      await api.post("signup", data);
      goToLogin();
    } catch {
      console.log("Erro de cadastro");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image source={image} style={{ height: 300, width: 300 }} />
      </View>
      <ScrollView>
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
              placeholder="Nome"
              onChangeText={(name) => setName(name)}
              defaultValue={name}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.inputBack}>
            <Entypo
              name="email"
              size={21}
              color="#2F2E2E"
              style={{ marginTop: 5, marginRight: 5 }}
            />
            <TextInput
              placeholderTextColor="white"
              style={styles.input}
              placeholder="E-mail"
              onChangeText={(email) => setEmail(email)}
              defaultValue={email}
              underlineColorAndroid="transparent"
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
              onChangeText={(password) => setPassword(password)}
              defaultValue={password}
              underlineColorAndroid="transparent"
              secureTextEntry={true}
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
              placeholder="Confirme sua senha"
              onChangeText={(passconfirm) => setPassconfirm(passconfirm)}
              defaultValue={passconfirm}
              underlineColorAndroid="transparent"
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.buttonBox}>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
