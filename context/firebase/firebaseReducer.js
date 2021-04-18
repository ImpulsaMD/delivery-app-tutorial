import { GET_RESTAURANTES, GET_PLATOS } from "../../types";
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

    default:
      return state;
  }
};
