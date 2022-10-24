import React, { useEffect, useMemo, useState } from "react";
import { Movie } from "../../models/Movies";
import { getMovies } from "../../services/movies";
import { MovieCard } from "../Cards/MovieCard";
import "./Grid.scss";
import { NothingFound } from "../NothingFound";

export const MoviesSection = () => {
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    const result = await getMovies();
    setMovies(result);
    setIsLoading(false);
  };

  //Another way to implement filtration - preferable for bigger projects:
  // useMemo hook basically creates a storage to avoid exessive re-rendering
  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(inputValue)
    );
  }, [movies, inputValue]);

  // In React 18, useEffect renders twice in the Strict mode
  // For bigger projects with more data/calls in the flow, it might be reasonable consider aborting the second render
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="centered">
      <input
        type="text"
        placeholder="Search by title..."
        onChange={(e) => {
          setInputValue(e.target.value.toLowerCase());
        }}
      />
      <div className="grid-wrapper">
        {isLoading ? (
          <p className="white-text">Loading...</p>
        ) : (
          <>
            {filteredMovies.length === 0 ? (
              <NothingFound />
            ) : (
              <div className="grid grid-movies">
                {filteredMovies.map((movie) => (
                  <MovieCard key={movie.episode_id} movie={movie} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
