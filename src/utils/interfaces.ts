export interface CardProps {
  name: any;
  species: any;
  image: any;
}


export interface RickAndMortyProviderProps {
  children?: React.ReactNode
  step?: number
  isModalOpen?: any
  error?: any
  searchName?: any
  searchList?: any
  searchSpecies?:any
  searchGender?: any
  searchStatus?: any
  isFilterOpen?: any
  setStep?: any
  setIsModalOpen?: any
  setError?: any
  setSearchName?: any
  setSearchList?: any
  setSearchSpecies?: any
  setSearchGender?: any
  setSearchStatus?: any
  setIsFilterOpen?: any
  toggleModal?: any
  toggleFilter?: any
  handleInput?: any

}
