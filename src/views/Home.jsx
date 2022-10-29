import pokefoto from "../assets/img/2.jpeg"
import React from "react";
import "../assets/css/home.css"

const Home = () => {

    return ( 
        <div className="d-flex flex-column">
            <div className="d-flex flex-column title-home">
                <h1>Bienvenido Maestro Pokemón</h1>
            </div>
            <div className="d-flex flex-column align-items-center">
                <img className="home-foto" src={pokefoto} alt="" />
            </div>
            
        </div>
    )
}

export default Home;