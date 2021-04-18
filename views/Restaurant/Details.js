import React, { useContext } from "react";
import { View } from "react-native";
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
  const { platos } = useContext(FirebaseContext);
  return (
    <Container>
      <Content>
        {platos ? (
          <List>
            {platos.map((p) => {
              const { nombre, categoria, id } = p;
              return (
                <ListItem key={id}>
                  <Body>
                    <Text>{nombre}</Text>
                    <Text note>{categoria}</Text>
                  </Body>
                </ListItem>
              );
            })}
          </List>
        ) : (
          <View>
            <Text>Cargando...</Text>
          </View>
        )}
      </Content>
    </Container>
  );
};
