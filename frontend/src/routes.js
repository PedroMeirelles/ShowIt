import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign, Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

import HomeScreen from "./Pages/HomeScreen";
import TicketScreen from "./Pages/TicketScreen";
import DetailsScreen from "./Pages/DetailsScreen";
import LoginScreen from "./Pages/LoginScreen";
import InfoTicketScreen from "./Pages/InfoTicketScreen";
import CardScreen from "./Pages/CardScreen";
import BuyConfirmScreen from "./Pages/BuyConfirmScreen";

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
      <HomeStack.Screen name="Card" component={CardScreen} />
      <HomeStack.Screen name="Confirm" component={BuyConfirmScreen} />
    </HomeStack.Navigator>
  );
}

const TicketStack = createStackNavigator();

function TicketStackScreen() {
  return (
    <TicketStack.Navigator screenOptions={{ headerShown: false }}>
      <TicketStack.Screen name="Ticket" component={TicketScreen} />
      <TicketStack.Screen name="Info" component={InfoTicketScreen} />
    </TicketStack.Navigator>
  );
}

const LoginStack = createStackNavigator();

function LoginStackScreen() {
  return (
    <LoginStack.Navigator screenOptions={{ headerShown: false }}>
      <LoginStack.Screen name="Login" component={LoginScreen} />
    </LoginStack.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer theme={{ colors: { border: "#2F2E2E" } }}>
      <Tab.Navigator
        tabBarOptions={{
          inactiveBackgroundColor: "#3F3D3D",
          activeBackgroundColor: "#2F2E2E",
          keyboardHidesTabBar: true,
          labelStyle: { color: "#D48015" },
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <AntDesign name="search1" size={24} color="#D48015" />
            ),
          }}
          name="Home"
          component={HomeStackScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <Entypo name="ticket" size={24} color="#D48015" />
            ),
          }}
          name="Meus Tickets"
          component={TicketStackScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <AntDesign name="user" size={24} color="#D48015" />
            ),
          }}
          name="Perfil"
          component={LoginStackScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
