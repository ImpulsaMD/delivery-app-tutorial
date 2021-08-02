import React, { useReducer } from "react";
import firebase from "../../firebase";
import FirebaseContext from "./firebaseContext";
import FirebaseReducer from "./firebaseReducer";
import {
  GET_RESTAURANTES,
  GET_PLATOS,
  POST_DETALLES,
  POST_ORDEN,
  DELETE_ORDEN,
  RESET_ORDEN,
  GET_SUMMARY

} from "../../types";

const FirebaseState = (props) => {
  const initialState = {
    restaurantes: [],
    platos: [],
    detallesplato: {},
    orden: [],
    summary: []

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

  //guardar orden
  const postOrden = (orden) => {
    dispatch({
      type: POST_ORDEN,
      payload: orden,
    });
  };


  //eliminar plato de orden
  const deleteOrden = indice => {
    dispatch({
      type: DELETE_ORDEN,
      payload: indice
    })
  }

  //guardar en db el pedido
  const postOrdenDB = (orden, usuario) => {

    firebase.db.collection('pedidos').add({ orden, usuario })

    dispatch({
      type: RESET_ORDEN
    })
  }

  const getSummary = email => {
    firebase.db
      .collection("pedidos")
      .where("usuario.email", "==", email)
      .onSnapshot(manejarSnapshot);

    function manejarSnapshot(snapshot) {
      let summary = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      dispatch({
        type: GET_SUMMARY,
        payload: summary
      })
    }
  }



  return (
    <FirebaseContext.Provider
      value={{
        //state
        restaurantes: state.restaurantes,
        platos: state.platos,
        detallesplato: state.detallesplato,
        orden: state.orden,
        summary: state.summary,
        //funciones
        getRestaurant,
        getPlatos,
        postDetalles,
        postOrden,
        deleteOrden,
        postOrdenDB,
        getSummary
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
