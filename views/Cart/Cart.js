import React, { useContext, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { Button, Text, Container, Content, ListItem, List, Thumbnail, Body, Right } from "native-base";
import FirebaseContext from "../../context/firebase/firebaseContext";


export default () => {
  const { orden, deleteOrden } = useContext(FirebaseContext)
  useEffect(() => {
    console.log('cambio en orden')
  }, [orden])
  return (
    <Container>
      {
        orden.length !== 0 ?
          (

            <Content>
              <ScrollView>
                <List>
                  {
                    orden.map((o, i) => {
                      const { nombre, subtotal, cantidad, imagen } = o
                      return (
                        <ListItem key={i}>
                          <Thumbnail source={{ uri: imagen }} square />
                          <Body>
                            <Text>{nombre}</Text>
                            <Text>Cantidad: {cantidad}</Text>
                            <Text>Subtotal: {subtotal}</Text>
                          </Body>
                          <Right>
                            <Button danger onPress={() => deleteOrden(i)} ><Text>X</Text></Button>
                          </Right>
                        </ListItem>
                      )
                    })
                  }
                </List>
              </ScrollView>
            </Content>
          )
          :
          (
            <View>
              <Text>Aun no has agregado ningun plato al carrito</Text>
              <Text>Ve y ordena ahora</Text>
            </View>
          )
      }
    </Container>
  );
};