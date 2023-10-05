import { useSelector } from "react-redux"
import useFetch from "../hooks/useFech"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"

const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [typeSelected, setTypeSelected] = useState('allPokemons')

  console.log(typeSelected)

  const trainer = useSelector(store => store.trainer)

  const inputSearch =  useRef()

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100000'
  const [pokemons, getPokemons, getTypePokemon ] = useFetch(url)

  useEffect(() => {
    if(typeSelected === 'allPokemons') {
        getPokemons()
    } else{ 
      getTypePokemon(typeSelected)
    }
    
  }, [typeSelected])
   
  const handleSearch = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }
    
    const pokeFiltered = pokemons?.results.filter(poke => poke.name.includes(inputValue))

  return (
    <div>
      <header>
        <img src="./images/cabesera.png" alt="" />
      </header>
      <p className="pokedexpage__hi">Hi {trainer}</p>
      <form className="pokedepage__form" onSubmit={handleSearch}>
        <input className="pokedexpage__input" ref={inputSearch} type="text" />
        <button className="pokedexpage__button">Search</button>
      </form>
      <SelectType
        setTypeSelected={setTypeSelected}
      />
      <div>
        {
          pokeFiltered?.map(poke => (
            <PokeCard
              key={poke.url}
              url={poke.url}
            />
          ))
        } 
      </div>
    </div>
  )
}

export default PokedexPage