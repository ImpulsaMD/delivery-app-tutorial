import React, { useEffect, useContext } from "react";
import { View } from "react-native";
import { Button, Text } from "native-base";
import FirebaseContext from "../../context/firebase/firebaseContext";



export default ({ navigation }) => {

  const { summary, getSummary } = useContext(FirebaseContext)
  const usuario = {
    email: 'impulsamdprojects@gmail.com',
    firstName: 'Impulsa',
    lastName: 'MD'
  }

  useEffect(() => {
    getSummary(usuario.email)
    console.log(summary)
  }, [])


  return (
    <View>
      <Button>
        <Text>Navegar</Text>
      </Button>
    </View>
  );
};
