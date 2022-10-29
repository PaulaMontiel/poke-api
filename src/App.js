import './App.css';
import React from 'react';
import {useEffect,useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPokeContext from "./my_context"
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Pokemons from "./views/Pokemons";
import Pokemon from "./views/Pokemon";


function App() {

  const [poke, setPoke] = useState([]);
  const endpoint = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0';

  const pokeGet = async () => {
      const res = await fetch(endpoint);
      const { results } = await res.json();
      setPoke(results);
  };

  useEffect(() => {
    pokeGet();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App d-flex flex-column">  
      <MyPokeContext.Provider value={{poke,setPoke}}>
        <BrowserRouter basename="poke-api">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemons" element={<Pokemons />} />
            <Route path="/pokemon/:pokemon" element={<Pokemon />} />
          </Routes>
        </BrowserRouter>
      </MyPokeContext.Provider>

    </div>
  );
}
export default App;