import React, { useEffect, useState } from "react";
import { Movie } from "../../models/Movies";
import { getMovies } from "../../services/movies";
import { MovieCard } from "../MovieCard/MovieCard";
import "./Grid.scss";
import babyYoda from "../../assets/baby-yoda.png";

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

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(inputValue)
  );

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
              <div className="not-found">
                <p className="white-text">Nothing found...</p>
                <img src={babyYoda} alt="baby Yoda" />
              </div>
            ) : (
              <div className="grid">
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
