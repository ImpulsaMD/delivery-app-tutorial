import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import { Button, Text, Content, Container, List, ListItem } from "native-base";
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
            const { nombre, telefono, id } = r;
            return (
              <ListItem
                key={id}
                onPress={() => {
                  getPlatos(id);
                  navigation.navigate("Food");
                }}
              >
                <Text>{nombre}</Text>
              </ListItem>
            );
          })}
        </List>
      </Content>
    </Container>
  );
};
