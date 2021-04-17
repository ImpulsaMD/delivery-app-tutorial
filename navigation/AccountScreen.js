import React from "react";
import { View } from "react-native";
import { Button, Text } from "native-base";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
//views
import Account from "../views/Account/Account";
import DetailsShopping from "../views/Account/DetailsShopping";

const AccountScreen = createStackNavigator(
  {
    Account: {
      screen: Account,
      navigationOptions: {
        title: "Cuenta",
      },
    },
    DetailsShopping: {
      screen: DetailsShopping,
      navigationOptions: {
        title: "Detalles Compra",
      },
    },
  },
  {
    initialRouteName: "Account",
  }
);

export default createAppContainer(AccountScreen);
