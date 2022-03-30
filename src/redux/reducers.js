import { GET_POKEMONS, LOADING } from "./actions";

const initialState = {
  loading: false,
  pokemons: [],
};

function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case GET_POKEMONS:
      return { ...state, pokemons: action.payload, loading: false };
    default:
      return state;
  }
}

export default pokemonReducer;
