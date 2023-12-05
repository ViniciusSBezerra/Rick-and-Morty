export interface CardProps {
  name: string;
  species: string;
  image: string;
}


export interface RickAndMortyProviderProps {
  children?: any
  step?: number
  isModalOpen?: boolean
  error?: string
  searchName?: string
  searchList?: CardProps[] 
  searchSpecies?:CardProps[] 
  searchGender?: CardProps[] 
  searchStatus?: CardProps[] 
  isFilterOpen?: boolean
  setStep?: (value: number) => void
  setIsModalOpen?: (value: boolean) => void
  setError?: (value: string) => void
  setSearchName?: (value: string) => void
  setSearchList?: (value: string) => void
  setSearchSpecies?: (value: string) => void
  setSearchGender?: (value: string) => void
  setSearchStatus?: (value: string) => void
  setIsFilterOpen?: (value: boolean) => void
  toggleModal?: () => void
  toggleFilter?: () => void
  handleInput?: (value: React.ChangeEvent<HTMLInputElement>) => void

}
