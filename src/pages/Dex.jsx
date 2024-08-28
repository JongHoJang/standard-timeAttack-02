import { useState } from "react";
import MOCK_DATA from "../MOCK_DATA";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";

function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  // 추가
  const addPokemon = (newPokemon) => {
    const searchPokemon = selectedPokemon.find(
      (selectedPokemon) => selectedPokemon.id === newPokemon.id
    );
    if (searchPokemon) {
      alert("이미 등록된 포켓몬입니다.");
      return;
    }
    if (selectedPokemon.length >= 6) {
      alert("포켓몬은 최대 6마리 선택이 가능합니다.");
      return;
    }
    setSelectedPokemon([...selectedPokemon, newPokemon]);
  };

  // 삭제
  const removePokemon = (pokemon) => {
    const filteredPokemon = selectedPokemon.filter((selected) => {
      return selected.id !== pokemon.id;
    });
    setSelectedPokemon(filteredPokemon);
  };

  return (
    <div>
      <Dashboard
        selectedPokemon={selectedPokemon}
        removePokemon={removePokemon}
      />
      <PokemonList pokemonData={MOCK_DATA} addPokemon={addPokemon} />
    </div>
  );
}

export default Dex;
