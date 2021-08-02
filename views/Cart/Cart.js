import React, { useContext, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { Button, Text, Container, Content, ListItem, List, Thumbnail, Body, Right, Footer, FooterTab } from "native-base";
import FirebaseContext from "../../context/firebase/firebaseContext";


export default ({ navigation }) => {
  const { orden, deleteOrden, postOrdenDB } = useContext(FirebaseContext)
  useEffect(() => {
    console.log('cambio en orden')
  }, [orden])

  const ordenarPedido = () => {

    const usuario = {
      email: 'impulsamdprojects2@gmail.com',
      firstName: 'Impulsa',
      lastName: 'MD'
    }

    //pasar la orden y el usuario para que se guarde en la db
    postOrdenDB(orden, usuario)
  }

  return (
    <Container>
      <Button onPress={() => navigation.navigate('Summary')} full info><Text>HISTORIAL</Text></Button>
      {
        orden.length !== 0 ?
          (

            <Content style={{ marginTop: 5 }}>
              <ScrollView >
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
      {
        orden.length !== 0 &&
        <Footer>
          <FooterTab>
            <Button onPress={() => ordenarPedido()} success full>
              <Text style={{ color: '#ffff' }}>ORDENAR</Text>
            </Button>
          </FooterTab>
        </Footer>
      }

    </Container>
  );
};