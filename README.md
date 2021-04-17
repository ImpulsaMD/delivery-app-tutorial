# delivery-app-tutorial
Repositorio de aplicación deliveryapp 


al clonar el repositorio recuerden instalar las dependencias antes de ejecutar,
"yarn add" la carpeta de node_modules no se carga al repositorio por lo que es muy pesada

el archivo firebase/config.js no se cargo, por  lo que ahi estan las apikeys de la base de datos recuerden que solo deben copiar el sdk que les proporcioan firebase y exportarlo
debe quedar asi:

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

export default firebaseConfig;

