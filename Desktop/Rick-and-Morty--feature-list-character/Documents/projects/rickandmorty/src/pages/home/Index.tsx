import { useState, useEffect } from "react";
import { Card } from "../../components/Card";
import "./styles.css";
import { CardProps } from "../../utils/interfaces";
import { FilterComponent } from "../../components/FilterComponent/FilterComponent";

import icon from "../../assets/HomeIconLogo.svg";

export const Characteres = () => {
  const [characteres, setCharacteres] = useState<CardProps | any>();
  const [count, setCount] = useState<number>(1);

  const pagination = () => {
    setCount(count + 1);
  };

  const getCharacteres = () => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${count}`)
      .then((response) => response.json())
      .then((response) => {
        response.results;
        setCharacteres(response.results);
      });
  };

  useEffect(() => {
    getCharacteres();
  }, [count]);
  return (
    <>
      <img className="icon" src={icon} alt="Icone" />
      <FilterComponent />
      <div className="list__characteres">
        {characteres?.map(({ name, species, image }: CardProps) => (
          <>
            <Card image={image} name={name} species={species} />
          </>
        ))}

        <button
          onClick={() => pagination()}
          className="list__characteres__load__more"
        >
          {" "}
          LOAD MORE
        </button>
      </div>
    </>
  );
};
