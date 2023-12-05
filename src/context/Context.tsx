import { createContext, useContext, useState } from "react";
import { RickAndMortyProviderProps } from "../utils/interfaces";

const data: RickAndMortyProviderProps = {} as RickAndMortyProviderProps

export const RickAndMortyContext = createContext(data)


export const RickAndMortyProvider: React.FC<any> = ({ children }) => {
    const [step, setStep] = useState(1)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [error, setError] = useState<string>('');
    const [searchName, setSearchName] = useState<string>("");
    const [searchList, setSearchList] = useState();
    const [searchSpecies, setSearchSpecies] = useState([]);
    const [searchGender, setSearchGender] = useState([]);
    const [searchStatus, setSearchStatus] = useState([]);
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
