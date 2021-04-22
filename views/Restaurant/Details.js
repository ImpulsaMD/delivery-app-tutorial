import React, { useContext, useEffect } from "react";
import { View, Image, TextInput } from "react-native";
import {
  Button,
  Text,
  Content,
  Container,
  List,
  ListItem,
  Body,
  Footer,
  FooterTab,
} from "native-base";
import FirebaseContext from "../../context/firebase/firebaseContext";

export default ({ navigation }) => {
  const { detallesplato } = useContext(FirebaseContext);
  const { nombre, imagen, categoria, descripcion, precio } = detallesplato;
  useEffect(() => {}, []);
  return (
    <Container>
      <Content>
        {detallesplato && (
          <View>
            <Image style={{ height: 200 }} source={{ uri: imagen }} />
            <Body>
              <Text>Detalles Plato</Text>
              <Text>{nombre}</Text>
              <Text>{descripcion}</Text>
              <Text note>{categoria}</Text>
              <Text> $ {precio}</Text>
            </Body>
          </View>
        )}
      </Content>
      <Footer>
        <FooterTab>
          <Button success>
            <Text>-</Text>
          </Button>
          <TextInput placeholder="0" keyboardType="numeric" />
          <Button success>
            <Text>+</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};
