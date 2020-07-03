import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign, Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

import HomeScreen from "./HomeScreen";
import TicketScreen from "./TicketScreen";

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <AntDesign name="search1" size={24} color="#D48015" />
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <Entypo name="ticket" size={24} color="#D48015" />
            ),
          }}
          name="Meus Tickets"
          component={TicketScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <AntDesign name="user" size={24} color="#D48015" />
            ),
          }}
          name="Perfil"
          component={HomeScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
