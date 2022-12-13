import React from "react";
import { Detail, PokemonDetail } from "../interface";
import "./pokemon.css";
import PokemonList from "./PokemonList";
interface Props {
  pokemons: PokemonDetail[];
  detail: Detail;
  setDetail: React.Dispatch<React.SetStateAction<Detail>>;
}
const PokemonCollection: React.FC<Props> = (props) => {
  const { pokemons, detail, setDetail } = props;
  const handleClickPokemon = (id: number) => {
    if (!detail.isOpen) {
      setDetail({
        id: id,
        isOpen: true,
      });
    }
  };
  return (
    <>
      <section
        className={
          detail.isOpen ? "collection-container-active" : "collection-container"
        }
      >
        {detail.isOpen ? (
          <div className="overlay"></div>
        ) : (
          <div className=""></div>
        )}
        {pokemons.map((pokemon) => (
          <div onClick={() => handleClickPokemon(pokemon.id)}>
            <PokemonList
              detail={detail}
              setDetail={setDetail}
              key={pokemon.name}
              name={pokemon.name}
              id={pokemon.id}
              abilities={pokemon.abilities}
              images={pokemon.sprites.front_default}
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default PokemonCollection;
