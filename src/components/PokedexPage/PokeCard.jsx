import { useEffect } from "react"
import useFetch from "../../hooks/useFech"
import { useNavigate } from "react-router-dom"
import './style/PokeCard.css'


const PokeCard = ({ url }) => {
    const [pokemon, getPokemon] = useFetch(url)

    const navigate = useNavigate ()

    useEffect(() => {
        getPokemon()
    }, [])

    const handleNavigate = () => {
      navigate (`/pokedex/${pokemon.id}`)
    }
     const firstType = pokemon?.types[0].type.name
  return (
      <div className="pokecard__container">
        <article className={`pokecard ${firstType}-border`} onClick={handleNavigate}>
          <header className={`pokecard__header ${firstType}-gradient`}>
            <img className="pokecard__image " src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
          </header>
          <section className="pokecard__body">
            <h3 className={`pokecard__name ${firstType}-color`}>{pokemon?.name}</h3>
            <ul className="pokecard__types">
              {
                pokemon?.types.map(typeInfo => (
                  <li className="pokecard__typename" key={typeInfo.type.url}>{typeInfo.type.name}</li> 
                ))
              }
            </ul>
            <hr className="porkecard__hr" />
            <ul className="pokecard__stats">
              {
                pokemon?.stats.map(statInfo => (
                  <li className="pokecard__stat" key={statInfo.stat.url}>
                    <h4 className="pokecard__stat__name"><span>{statInfo.stat.name}</span></h4>
                    <span className={`pokecard__stat__value ${firstType}-color`}>{statInfo.base_stat}</span>
                  </li>
                  
                ))
              }
            </ul>
          </section>
        </article>
      </div>  
  )
}

export default PokeCard