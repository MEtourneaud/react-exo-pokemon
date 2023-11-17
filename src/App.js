import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./page/home/Home.jsx"
import Pokemons from "./page/pokemons/Pokemons.jsx"

import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<Pokemons />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
