import React, { FC } from "react";
import { Movie } from "../../models/Movies";
import "./MovieCard.scss";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="card movie-card">
      <h3>{movie.title}</h3>
      <p>Directed by: {movie.director}</p>
      <p>{movie.release_date}</p>
    </div>
  );
};
