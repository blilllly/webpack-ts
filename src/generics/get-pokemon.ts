import axios from "axios";
import { PokeResponse } from "../interfaces";

export const getPokemon = async (pokemonId: number): Promise<PokeResponse> => {
  const { data } = await axios.get<PokeResponse>(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );

  return data;
};
