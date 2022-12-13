import React, { useEffect, useState } from "react";
import { Detail } from "../interface";
import "./pokemon.css";
interface Props {
  abilities:
    | {
        name: string;
        ability: string;
      }[]
    | undefined;
  name: string;
  id: number;
  images: string;
  detail: Detail;
  setDetail: React.Dispatch<React.SetStateAction<Detail>>;
}
const PokemonList: React.FC<Props> = (props) => {
  const { name, id, images, abilities, detail, setDetail } = props;
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    setIsSelected(id === detail?.id);
  }, [detail, id]);

  const handleClose = () => {
    setDetail({
      id: 0,
      isOpen: false,
    });
  };
  return (
    <div className="">
      {isSelected ? (
        <section className="pokemon-list-detailed">
          <div className="detail-container">
            <p className="detail-close" onClick={handleClose}>
              X
            </p>
            <div className="detail-info">
              <img src={images} alt="pokemon" className="detail-img" />
              <p className="detail-name">{name}</p>
            </div>
            <div className="detail-skill">
              <p className="detail-ability">Ability: </p>
              {abilities?.map((ab: any) => (
                <div className="">{ab.ability.name}</div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="pokemon-list-container">
          <p className="pokemon-name">{name}</p>
          <img src={images} alt="pokemon" />
        </section>
      )}
    </div>
  );
};

export default PokemonList;
