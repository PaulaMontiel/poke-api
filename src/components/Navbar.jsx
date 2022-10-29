import React from "react";
import { NavLink } from "react-router-dom";
import '../assets/css/navbar.css';
import pin from '../assets/img/pin.png';
import home from '../assets/img/home.png';
import pokemones from '../assets/img/pokemones.png';



export default function Navbar() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
    return (
        <div className="mynavbar">
            <nav className="navbar navbar-expand-md navbar-dark bg-danger">
                <span className="navbar-brand">
                    <img src={pin} alt="poke-ticon"/>
                </span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex flex-row justify-content-end" id="navbarNavAltMarkup">
                    <div className="Nav-link">
                        <NavLink className={setActiveClass} style={{ color: 'gray' }} to="/" end>
                            <img src={home} alt="home" width={100}/>
                        </NavLink>
                    </div>
                  
                    <div className="Nav-link">
                        <NavLink className={setActiveClass} style={{ color: 'gray' }} to="/pokemons">
                            <img src={pokemones} alt="pokemones" width={150}/>
                        </NavLink>
                    </div>
                    
                </div>
            </nav >
       
        </div >
    );
}