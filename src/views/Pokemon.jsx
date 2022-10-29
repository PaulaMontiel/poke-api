import PokeCards from "../components/PokeCards.jsx"
import React from "react";
import { useParams } from "react-router-dom";


const Pokemon = () => {
    const { pokemon } = useParams();

    return (
        <div>
            <PokeCards pokemon={pokemon}></PokeCards>
        </div>
    )
}
export default Pokemon;