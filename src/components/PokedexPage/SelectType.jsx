import { useEffect } from "react"
import useFetch from "../../hooks/useFech"


const SelectType = ({setTypeSelected}) => {
  const url = 'https://pokeapi.co/api/v2/type'

  const[types, getTypes] = useFetch(url) 

  useEffect(() => {
    getTypes()
  }, []) 
  
  const handleChange = e => {
    setTypeSelected(e.target.value)
  }

  return (
    <div>
        <select onChange={handleChange}>
            <option className="selectype__allpokemon" value={'all Pokemons'}>All pokemons</option>
            {
              types?.results.map(typeinfo => (
                <option key={typeinfo.url} value={typeinfo.url}>{typeinfo.name}</option>
              ))
            }
        </select>
    </div>
  )
}

export default SelectType