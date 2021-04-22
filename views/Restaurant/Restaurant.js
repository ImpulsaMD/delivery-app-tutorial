import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import {
  Button,
  Text,
  Content,
  Container,
  List,
  ListItem,
  Thumbnail,
  Body,
} from "native-base";
import FirebaseContext from "../../context/firebase/firebaseContext";

export default ({ navigation }) => {
  const { restaurantes, getRestaurant, getPlatos } = useContext(
    FirebaseContext
  );

  useEffect(() => {
    if (restaurantes.length == 0) {
      getRestaurant();
    }
  }, []);

  return (
    <Container>
      <Content>
        <List>
          {restaurantes.map((r) => {
            const { nombre, telefono, imagen, categoria, id } = r;
            return (
              <ListItem
                key={id}
                onPress={() => {
                  getPlatos(id);
                  navigation.navigate("Food");
                }}
              >
                <Thumbnail source={{ uri: imagen }} />
                <Body>
                  <Text>{nombre}</Text>
                  <Text>Telefono: {telefono}</Text>
                  <Text note>{categoria}</Text>
                </Body>
              </ListItem>
            );
          })}
        </List>
      </Content>
    </Container>
  );
};
