# delivery-app-tutorial
Repositorio de aplicación deliveryapp 

al clonar el repositorio recuerden instalar las dependencias antes de ejecutar,
"yarn add" la carpeta de node_modules no se carga al repositorio por lo que es muy pesada

el archivo firebase/config.js no se cargo, por  lo que ahi estan las apikeys de la base de datos recuerden que solo deben copiar el sdk que les proporcioan firebase y exportarlo
debe quedar con la sigiente estructura, ya hi le llenan con sus datos:

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};
export default firebaseConfig;

Dependencias utilizadas

expo install react-navigation react-native-gesture-handler react-native-reanimated react-native-screens

yarn add react-navigation-stack

yarn add react-navigation-tabs

yarn add native-base

expo install expo-font

yarn add firebase
