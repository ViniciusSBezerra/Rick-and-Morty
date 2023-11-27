import { useState } from "react";
import { Card } from "../Card";
import { CardProps } from "../../utils/interfaces";
import "./styles.css";
import { SearchIcon } from "../../assets/icons";

export const FilterComponent = () => {
  const [searchName, setSearchName] = useState<string>("");

  const [searchList, setSearchList] = useState<CardProps | any>();
  const [searchSpecies, setSearchSpecies] = useState<CardProps | any>();
  const [searchGender, setSearchGender] = useState<CardProps | any>();
  const [searchStatus, setSearchStatus] = useState<CardProps | any>();
  const [error, setError] = useState<string>();

  const handleInput = (e: any) => {
    setSearchName(e.target.value);
  };

  const searchByName = async (e: any) => {
    e.preventDefault();

    if (searchName === undefined) return null;
    await fetch(`https://rickandmortyapi.com/api/character/?name=${searchName}`)
      .then((response) => response.json())
      .then((response) => {
        setError("");
        if (response.error) return setError("Personagem não encontrado!");
        setSearchList(response.results);
      });
  };

  const handleSelectChangeSpecies = async (event: any) => {
    event.preventDefault();

    const selected = event.target.value;

    if (selected === undefined) return null;

    await fetch(
      `https://rickandmortyapi.com/api/character/?species=${selected}`
    )
      .then((response) => response.json())
      .then((response) => {
        setSearchSpecies(response.results);
      });
  };

  const handleSelectChangeGender = async (event: any) => {
    event.preventDefault();

    const selected = event.target.value;

    if (selected === undefined) return null;

    await fetch(`https://rickandmortyapi.com/api/character/?gender=${selected}`)
      .then((response) => response.json())
      .then((response) => {
        setSearchGender(response.results);
      });
  };

  const handleSelectChangeStatus = async (event: any) => {
    event.preventDefault();

    const selected = event.target.value;

    if (selected === undefined) return null;

    await fetch(`https://rickandmortyapi.com/api/character/?status=${selected}`)
      .then((response) => response.json())
      .then((response) => {
        setSearchStatus(response.results);
      });
  };

  return (
    <>
      <div className="filter__container">
        <form className="form__input" action="">
          <input
            className="filter__input"
            type="text"
            name="filter"
            placeholder="Filter by name..."
            onChange={handleInput}
          />
          <button className="button__search" onClick={searchByName}>
            <SearchIcon />
          </button>
        </form>
        <select
          className="filter__selected"
          onChange={handleSelectChangeSpecies}
        >
          <option selected>Species</option>
          <option value="human">Human</option>
          <option value="alien">Alien</option>
          <option value="robot">robot</option>
          <option value="unknown">unknown</option>
          <option value="Mythological Creature"> Mythological Creature</option>
        </select>

        <select
          className="filter__selected"
          onChange={handleSelectChangeGender}
        >
          <option selected>Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select
          className="filter__selected"
          onChange={handleSelectChangeStatus}
        >
          <option selected>Status</option>
          <option value="alive">alive</option>
          <option value="dead">dead</option>
        </select>
      </div>
      {searchList && (
        <div className="container__filter_search">
          {searchList?.map(({ name, image, species }: CardProps) => (
            <Card name={name} image={image} species={species} />
          ))}
        </div>
      )}
      {searchSpecies && (
        <div className="container__filter_search">
          {searchSpecies?.map(({ name, image, species }: CardProps) => (
            <Card name={name} image={image} species={species} />
          ))}
        </div>
      )}
      {searchGender && (
        <div className="container__filter_search">
          {searchGender?.map(({ name, image, species }: CardProps) => (
            <Card name={name} image={image} species={species} />
          ))}
        </div>
      )}
      {searchStatus && (
        <div className="container__filter_search">
          {searchStatus?.map(({ name, image, species }: CardProps) => (
            <Card name={name} image={image} species={species} />
          ))}
        </div>
      )}

      {error && <p className="error_message">{error}</p>}
    </>
  );
};
