import axios from "axios";
import { Movies } from "../models/Movies";

/* One of the ways to execute get request is by using axios library */

export const getMovies = async () => {
  try {
    const response = await axios.get<Movies>("https://swapi.dev/api/films/");
    return response.data.results;
  } catch (error) {
    return [];
  }
};

/* The same is also possible with fetch which is already included in React:


const getMoviesWithFetch = () => {
  fetch("https://swapi.dev/api/films/")
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
