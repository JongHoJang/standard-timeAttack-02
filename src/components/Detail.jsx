import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../MOCK_DATA";

const Detail = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const pokemonId = searchParams.get("id");

  const selectedPokemon = MOCK_DATA.find(
    (pokemon) => pokemon.id === Number(pokemonId)
  );

  const { img_url, korean_name, description, types } = selectedPokemon;

  return (
    <div>
      <img src={img_url} alt={"korean_name"} />
      <div>{korean_name}</div>
      <div>{description}</div>
      <div>{types}</div>
      <button onClick={() => navigate("/dex")}>뒤로가기</button>
    </div>
  );
};

export default Detail;
