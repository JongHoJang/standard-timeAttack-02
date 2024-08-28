import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Card = styled.div``;
const Button = styled.button``;

function PokemonCard({ pokemon, addPokemon, isSelected, removePokemon }) {
  const { img_url, korean_name, id } = pokemon;
  const navigate = useNavigate();

  const handleAddPokemon = (e) => {
    addPokemon(pokemon);
    e.stopPropagation();
  };

  const handleRemovePokemon = (e) => {
    removePokemon(pokemon);
    e.stopPropagation();
  };

  const handleDetail = () => {
    navigate(`/detail?id=${pokemon.id}`);
  };

  return (
    <Card onClick={handleDetail}>
      <img src={img_url} alt={"korean_name"} />
      <div>{korean_name}</div>
      <div> No. {String(id).padStart(3, "0")}</div>
      {isSelected ? (
        <Button onClick={handleRemovePokemon}>삭제</Button>
      ) : (
        <Button onClick={handleAddPokemon}>추가</Button>
      )}
    </Card>
  );
}

export default PokemonCard;
