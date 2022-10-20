import axios from "axios";
import { Characters } from "../models/Characters";

export const getCharacters = async () => {
  try {
    const response = await axios.get<Characters>(
      "https://swapi.dev/api/people/"
    );
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};
