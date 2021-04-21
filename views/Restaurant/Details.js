import React, { useContext, useEffect } from "react";
import { View, Image } from "react-native";
import {
  Button,
  Text,
  Content,
  Container,
  List,
  ListItem,
  Body,
} from "native-base";
import FirebaseContext from "../../context/firebase/firebaseContext";

export default ({ navigation }) => {
  const { detallesplato } = useContext(FirebaseContext);
  const { nombre, categoria, descripcion, precio } = detallesplato;
  useEffect(() => {}, []);
  return (
    <Container>
      <Content>
        {detallesplato && (
          <View>
            <Image style={{ height: 200 }} />
            <Text>Detalles Plato</Text>
            <Text>{nombre}</Text>
            <Text>{descripcion}</Text>
            <Text note>{categoria}</Text>
            <Text>{precio}</Text>
          </View>
        )}
      </Content>
    </Container>
  );
};
