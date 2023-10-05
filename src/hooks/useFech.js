import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {

    const [infoApi, setInfoApi] = useState()

    const getApi = () => {
        axios.get(url)
        .then(res => setInfoApi (res.data))
        .catch(err => console.log (err))
    }
    const getTypeApi = (urlType) => {
        axios.get(urlType)
        .then(res =>{
            res.data
            const obj = {
                results: res.data.pokemon.map(e => e.pokemon)
            }
            setInfoApi(obj)   
        })  
    }
    return [infoApi, getApi, getTypeApi]
}

export default useFetch