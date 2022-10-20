import axios from "axios";
import { Movies } from "../models/Movies";

export const getMovies = async () => {
  try {
    const response = await axios.get<Movies>("https://swapi.dev/api/films/");
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};
