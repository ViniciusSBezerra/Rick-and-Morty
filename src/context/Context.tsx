import { ReactNode, createContext, useState } from "react";

export const RickAndMortyContext = createContext<any>('ola muindo')

interface RickAndMortyProviderProps {
    children: ReactNode
}

export const RickAndMortyProvider: React.FC<RickAndMortyProviderProps> = ({ children }) => {
    const [name, setName] = useState('digite seu nome')
    const [step, setStep] = useState(1)

    const newName = () => {
        setName('vinicius')
    }

    const renderController = () => {

    }

    console.log(name)

    return (
        <RickAndMortyContext.Provider value={{ step, name, setName, newName, renderController, setStep }}>
            {children}
        </RickAndMortyContext.Provider>
    )
}