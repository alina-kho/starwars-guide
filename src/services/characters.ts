import axios from "axios";
import { Characters } from "../models/Characters";

export const getCharacters = async () => {
  try {
    const response = await axios.get<Characters>(
      "https://swapi.dev/api/people/"
    );
    return response.data.results;
  } catch (error) {
    return [];
  }
};

/* The same is also possible with fetch which is already included in React:


const getMoviesWithFetch = () => {
  fetch("https://swapi.dev/api/people/")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch((e) => {
      return e;
    });
};

*/
