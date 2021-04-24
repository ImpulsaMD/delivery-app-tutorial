import {
  GET_RESTAURANTES,
  GET_PLATOS,
  POST_DETALLES,
  POST_ORDEN,
} from "../../types";
export default (state, action) => {
  switch (action.type) {
    case GET_RESTAURANTES:
      return {
        ...state,
        restaurantes: action.payload,
      };
    case GET_PLATOS:
      return {
        ...state,
        platos: action.payload,
      };
    case POST_DETALLES:
      return {
        ...state,
        detallesplato: action.payload,
      };
    case POST_ORDEN:
      return {
        ...state,
        orden: [...state.orden, action.payload],
      };
    default:
      return state;
  }
};
