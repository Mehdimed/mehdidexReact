import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const Name = styled.div``;
const Picture = styled.img`
  width: 100px;
  height: auto;
`;
const Stats = styled.div`
  display: flex;
  flex-direction: column;
`;

const PokemonInfos = () => {
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();

  const getPokemon = async () => {
    if (id > 0 && id < 152) {
      const response = await fetch(
        process.env.REACT_APP_FETCH_URL + "pokemon/" + id
      );
      const data = await response.json();
      setPokemon(data);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {getPokemon();}, [id]); // on récupere le pokemon quand on arrive sur la page et quand l'id change on recharge le composant
  return (
    <Container>
      {pokemon.name && (
        <Picture
          src={
            process.env.REACT_APP_FETCH_URL +
            "images/pokemons/" +
            pokemon.name +
            ".png"
          }
          alt={pokemon.name || "pokemon"}
        />
      )}
      <Name>{pokemon.name}</Name>
      <Stats>
        <span>pv : {pokemon.pv}</span>
        <span>atk : {pokemon.atk}</span>
        <span>atk spé : {pokemon.atkspe}</span>
        <span>def : {pokemon.def}</span>
        <span>def spé : {pokemon.defspe}</span>
        <span>vit : {pokemon.speed}</span>
      </Stats>
    </Container>
  );
};

export default PokemonInfos;
