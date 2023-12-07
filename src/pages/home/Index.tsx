import { useState, useEffect } from "react";
import { Card } from "../../components/Card";
import "./styles.css";
import { CardProps } from "../../utils/interfaces";
import { FilterComponent } from "../../components/FilterComponent/FilterComponent";

import icon from "../../assets/HomeIconLogo.svg";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/header";

import { useRickAndMortyContext } from "../../context/Context";
import { Episodes } from "../episodes/Episodes";
import { Locations } from "../Locations/Locations";

export const Characteres = () => {
  const [characteres, setCharacteres] = useState<CardProps[] | any>([]);
  const [count, setCount] = useState<number>(1);
  const [initialFetch, setInitialFetch] = useState(false);

  const { step } = useRickAndMortyContext()

  const pagination = () => {
    setCount(count + 1);
    setInitialFetch(false);
  };

  const getCharacteres = () => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${count}`)
      .then((response) => response.json())
      .then((response) => {
        setCharacteres([...characteres, ...response.results]);
        setInitialFetch(true);
      });
  };

  useEffect(() => {
    if (!initialFetch) {
      getCharacteres();
    }
  }, [count, initialFetch]);
  return (
    <>
      <Header />

      {step === 1 && (

        <div className="list__characteres">
          <div className="container__icon">
            <img className="icon" src={icon} alt="Icone" />
          </div>
          <FilterComponent />
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

        </div >
      )}

      {step === 2 && (<Episodes />)}
      {step === 3 && (<Locations />)}

      <Footer />
    </>
  );
};
