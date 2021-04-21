import React from "react";
import { View } from "react-native";
import { Button, Text } from "native-base";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
//views
import Restaurant from "../views/Restaurant/Restaurant";
import Details from "../views/Restaurant/Details";
import Food from "../views/Restaurant/Food";

const RestaurantScreen = createStackNavigator(
  {
    Restaurant: {
      screen: Restaurant,
      navigationOptions: {
        title: "Restaurantes",
      },
    },
    Food: {
      screen: Food,
      navigationOptions: {
        title: "Comida",
      },
    },
    Details: {
      screen: Details,
      navigationOptions: {
        title: "Detalles",
      },
    },
  },
  {
    initialRouteName: "Restaurant",
  }
);

export default createAppContainer(RestaurantScreen);
