import { useRef } from "react"
import {setTrainerSlice} from "../store/slices/trainer.slice"
import { useDispatch,} from "react-redux"
import { useNavigate } from "react-router-dom"

const HomePages = () => {

  const inputTrainer = useRef()

  const  dispatch = useDispatch()

  const navigate = useNavigate()

  const handleTrainer = e => {
    e.preventDefault()
    dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }

  return (
    <div className="homepage__container">
      <div className="homepage__img">
        <img className="homepage__title" src="./images/titulo.png" alt="" />
      </div>  
        <h2 className="homepage__greeting">Hi trainer! </h2>
        <p className="homepage__paragraph">To start, please, enter me your trainer name</p>
      <form className="homepage__form" onSubmit={handleTrainer}>
        <input className="homepage__input"  ref={inputTrainer} type="text" />
        <button className="homepage__button" >start!</button>
      </form>
      <footer>
        <img  className="homepage__footer" src="./images/footer.png" alt="" />  
      </footer>
    </div>
  )
}

export default HomePages