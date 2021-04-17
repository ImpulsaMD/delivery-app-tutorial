import React from "react";
import { View } from "react-native";
import { Button, Text } from "native-base";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
//screens
import Home from "../views/Home/Home";
import AccountScreen from "./AccountScreen";
import CartScreen from "./CartScreen";
import RestaurantScreen from "./RestaurantScreen";

const Screens = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: Home,
      navigationOptions: {
        title: "Inicio",
      },
    },
    RestaurantScreen: {
      screen: RestaurantScreen,
      navigationOptions: {
        title: "Restaurantes",
      },
    },
    CartScreen: {
      screen: CartScreen,
      navigationOptions: {
        title: "Compras",
      },
    },
    AccountScreen: {
      screen: AccountScreen,
      navigationOptions: {
        title: "Cuenta",
      },
    },
  },
  {
    initialRouteName: "HomeScreen",
  }
);

export default createAppContainer(Screens);
