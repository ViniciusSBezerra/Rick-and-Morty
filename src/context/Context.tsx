import { createContext, useContext, useState } from "react";
import { CardProps } from "../utils/interfaces";
import { RickAndMortyProviderProps } from '../utils/interfaces'

export const RickAndMortyContext = createContext<any>('')


export const RickAndMortyProvider: React.FC<RickAndMortyProviderProps> = ({ children }) => {
    const [step, setStep] = useState(1)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [error, setError] = useState<string>();
    const [searchName, setSearchName] = useState<string>("");
    const [searchList, setSearchList] = useState<CardProps | any>();
    const [searchSpecies, setSearchSpecies] = useState<CardProps | any>();
    const [searchGender, setSearchGender] = useState<CardProps | any>();
    const [searchStatus, setSearchStatus] = useState<CardProps | any>();
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const handleInput = (e: any) => {
        setSearchName(e.target.value);
    };


    return (
        <RickAndMortyContext.Provider value={{ step, isModalOpen, error, setStep, toggleModal, setError, searchName, setSearchName, searchList, setSearchList, searchSpecies, setSearchSpecies, searchGender, setSearchGender, searchStatus, setSearchStatus, isFilterOpen, setIsFilterOpen, toggleFilter, handleInput }}>
            {children}
        </RickAndMortyContext.Provider>
    )
}

export const useRickAndMortyContext = (): RickAndMortyProviderProps => {
    const context = useContext(RickAndMortyContext)

    if (!context) {
        throw new Error('useRickAndMortyContext deve ser usado dentro de um RickAndMortyProvider');
    }

    return context
}
