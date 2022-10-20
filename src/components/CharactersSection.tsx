import React, { useEffect, useState } from "react";
import { Character } from "../models/Characters";
import { getCharacters } from "../services/characters";
import { NothingFound } from "./NothingFound";
import "./Grid.scss";
import { CharacterCard } from "./CharacterCard";

export const CharactersSection = () => {
  const [inputValue, setInputValue] = useState("");
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    const result = await getCharacters();
    setCharacters(result);
    setIsLoading(false);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(inputValue)
  );

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className="centered">
      <input
        type="text"
        placeholder="Search by name..."
        onChange={(e) => {
          setInputValue(e.target.value.toLowerCase());
        }}
      />
      <div className="grid-wrapper">
        {isLoading ? (
          <p className="white-text">Loading...</p>
        ) : (
          <>
            {filteredCharacters.length === 0 ? (
              <NothingFound />
            ) : (
              <div className="grid grid-characters">
                {filteredCharacters.map((character) => (
                  <CharacterCard key={character.name} character={character} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
