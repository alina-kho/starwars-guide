import React, { FC } from "react";
import { Character } from "../../models/Characters";
import "./Cards.scss";

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="card character-card">
      <h3>{character.name}</h3>
      <p>Gender: {character.gender}</p>
      <p>Birth year: {character.birth_year}</p>
    </div>
  );
};
