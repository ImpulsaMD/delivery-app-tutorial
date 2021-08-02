import React from "react";
import { View } from "react-native";
import { Button, Text } from "native-base";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
//views
import Cart from "../views/Cart/Cart";
import Summary from "../views/Cart/Summary";

const CartScreen = createStackNavigator(
  {
    Cart: {
      screen: Cart,
      navigationOptions: {
        title: "Carro de compras",
      },
    },
    Summary: {
      screen: Summary,
      navigationOptions: {
        title: "Resumen de Compras",
      },
    },
  },
  {
    initialRouteName: "Cart",
  }
);

export default createAppContainer(CartScreen);
