import React, { useReducer } from "react";
import firebase from "../../firebase";
import FirebaseContext from "./firebaseContext";
import FirebaseReducer from "./firebaseReducer";
import { GET_RESTAURANTES, GET_PLATOS, POST_DETALLES } from "../../types";

const FirebaseState = (props) => {
  const initialState = {
    restaurantes: [],
    platos: [],
    detallesplato: {},
  };

  const [state, dispatch] = useReducer(FirebaseReducer, initialState);

  const getRestaurant = () => {
    firebase.db.collection("restaurantes").onSnapshot(manejarSnapshot);

    function manejarSnapshot(snapshot) {
      let restaurant = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      // resultados
      dispatch({
        type: GET_RESTAURANTES,
        payload: restaurant,
      });
    }
  };

  //traere platos
  const getPlatos = (id) => {
    firebase.db
      .collection("platos")
      .where("idRestaurante", "==", id)
      .onSnapshot(manejarSnapshot);

    function manejarSnapshot(snapshot) {
      let platos = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      dispatch({
        type: GET_PLATOS,
        payload: platos,
      });
    }
  };

  //detalles de plato seleccionado
  const postDetalles = (plato) => {
    dispatch({
      type: POST_DETALLES,
      payload: plato,
    });
  };

  return (
    <FirebaseContext.Provider
      value={{
        //state
        restaurantes: state.restaurantes,
        platos: state.platos,
        detallesplato: state.detallesplato,
        //funciones
        getRestaurant,
        getPlatos,
        postDetalles,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
