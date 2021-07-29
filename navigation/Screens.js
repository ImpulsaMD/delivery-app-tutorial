import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons, FontAwesome } from '@expo/vector-icons'

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
        tabBarIcon: ({ focused, tintColor }) => {
          const iconName = `restaurant${focused ? '' : '-outline'}`;
          return <Ionicons name={iconName} size={20} color={tintColor} />
        }
      },
    },
    RestaurantScreen: {
      screen: RestaurantScreen,
      navigationOptions: {
        title: "Restaurantes",
        tabBarIcon: ({ focused, tintColor }) => {
          const iconName = `home${focused ? '-sharp' : '-outline'}`;
          return <Ionicons name={iconName} size={20} color={tintColor} />
        }
      },
    },
    CartScreen: {
      screen: CartScreen,
      navigationOptions: {
        title: "Compras",
        tabBarIcon: ({ focused, tintColor }) => {
          //const iconName = `home${focused ? '-sharp' : '-outline'}`;
          return <FontAwesome name='shopping-basket' size={20} color={tintColor} />
        }
      },
    },
    AccountScreen: {
      screen: AccountScreen,
      navigationOptions: {
        title: "Cuenta",
        tabBarIcon: ({ focused, tintColor }) => {
          const iconName = `user${focused ? '' : '-o'}`;
          return <FontAwesome name={iconName} size={20} color={tintColor} />
        }
      },
    },
  },
  {
    initialRouteName: "HomeScreen",
  }
);

export default createAppContainer(Screens);
