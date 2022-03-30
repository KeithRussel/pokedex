import axios from "axios";

export const LOADING = "LOADING";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON = "GET_POKEMON";

export const getPokemons = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=20",
      config
    );

    if (data) {
      dispatch({
        type: GET_POKEMONS,
        payload: data.results,
      });
    }
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};
