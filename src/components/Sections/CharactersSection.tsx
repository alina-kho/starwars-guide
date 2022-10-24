import React, { useEffect, useState } from "react";
import { Character } from "../../models/Characters";
import { getCharacters } from "../../services/characters";
import { NothingFound } from "../NothingFound";
import "./Grid.scss";
import { CharacterCard } from "../Cards/CharacterCard";

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

  //One way to apply client-side filtering - without using useMemo hook since it is a smaller project
  //For bigger projects, I suggest using useMemo not to load the app with unneccessary renders and calls (see the Movies Section component)
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(inputValue)
  );

  // In React 18, useEffect renders twice in the Strict mode
  // For bigger projects with more data/calls in the flow, it might be reasonable consider aborting the second render
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
