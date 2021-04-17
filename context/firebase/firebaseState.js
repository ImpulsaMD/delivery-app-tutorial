import React, { useReducer } from "react";
import firebase from "../../firebase";
import FirebaseContext from "./firebaseContext";
import FirebaseReducer from "./firebaseReducer";

const FirebaseState = (props) => {
  const initialState = {
    restaurantes: [],
  };

  const [state, dispatch] = useReducer(FirebaseReducer, initialState);

  const getRestaurant = () => {
    console.log("obteniendo restaurantes de firebase");
  };

  return (
    <FirebaseContext.Provider
      value={{
        //state
        restaurantes: state.restaurantes,
        //funciones
        getRestaurant,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
