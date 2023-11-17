import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"

import Home from "./page/home/Home.jsx"
import Pokemons from "./page/pokemons/Pokemons.jsx"
import PokemonDetail from "./page/PokemonDetail.jsx"
import TrainerDetails from "./page/TrainerDetails.jsx"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/pokemons/:pokemonId/details" element={<PokemonDetail />} />
          <Route path="/trainers/:trainerId/details" element={<TrainerDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
