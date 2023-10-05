import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePages from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'
import PokedexIdPage from './pages/PokedexIdPage'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {
  

  return (
    <div className="app__container">
      <Routes>
        <Route path='/' element={<HomePages />}  />
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<PokedexPage />}  />
          <Route path='pokedex/:id' element={<PokedexIdPage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
