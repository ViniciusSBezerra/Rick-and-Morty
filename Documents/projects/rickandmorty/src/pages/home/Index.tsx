import { useState, useEffect } from "react";
import { Card } from "../../components/Card";
import "./styles.css";
import { CardProps } from "../../utils/interfaces";

export const Characteres = () => {
  const [characteres, setCharacteres] = useState<CardProps | any>();
  const [count, setCount] = useState<number>(1);

  const pagination = () => {
    console.log(count);
    setCount(count + 1);
    console.log(count);
  };

  console.log(count);
  const getCharacteres = () => {
    console.log(count);
    fetch(`https://rickandmortyapi.com/api/character/?page=${count}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results);
        setCharacteres(response.results);
      });
  };

  useEffect(() => {
    getCharacteres();
  }, [count]);
  return (
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
  );
};
