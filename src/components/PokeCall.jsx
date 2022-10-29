import React, { useState, useContext } from 'react';
import PokeContext from "../my_context.jsx";
import { useNavigate } from "react-router-dom";
import '../assets/css/pokecall.css'

const PokeCall = () => {
    const navigate = useNavigate();
    const { poke } = useContext(PokeContext);
    const [pokemon, setPokemon] = useState("");

    const pokeDetails = () => {
        if(pokemon.length>0){
            navigate(`/pokemon/${pokemon}`)
        }
    };


    return (
        <div className='pokegallery d-flex flex-column'>
            <h1>Selecciona un pokemon</h1>
            <div>
                <select onChange={({ target }) => setPokemon(target.value)}>
                    <option>Selecciona un Pokemón</option>
                    {poke.map((pokemons, index) => (
                        <option value={pokemons.name} key={index}>{pokemons.name}</option>
                    ))}
                </select>
            </div>
            <div><button className='poke-button' onClick={() => pokeDetails()}></button></div>
        </div>
    )
}

export default PokeCall;