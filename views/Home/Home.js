import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import { Button, Text } from "native-base";
import FirebaseContext from "../../context/firebase/firebaseContext";

export default ({ navigation }) => {
  const { restaurantes, getRestaurant } = useContext(FirebaseContext);
  useEffect(() => {
    getRestaurant();
  }, []);
  return (
    <View>
      <Button>
        <Text>Navegar</Text>
      </Button>
    </View>
  );
};
