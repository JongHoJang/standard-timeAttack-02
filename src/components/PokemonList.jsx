import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const ListContainer = styled.div``;

const PokemonList = ({ pokemonData, addPokemon }) => {
  return (
    <ListContainer>
      {pokemonData.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          isSelected={false}
          addPokemon={addPokemon}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
