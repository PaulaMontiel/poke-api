import React, { useEffect, useState } from 'react';
import "../assets/css/pokecard.css"
import "../assets/css/pokedex.css"


const PokeCard = ({ pokemon }) => {
  console.log(pokemon);
  const [pokeInfo, setPokeInfo] = useState({})
  const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  const pokeGetInfo = async () => {
    const res = await fetch(endpoint);
    const result = await res.json();
    setPokeInfo(result);
  };

  useEffect(() => {
    pokeGetInfo(pokeInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (pokeInfo.hasOwnProperty('sprites')){
    return (
      <div id="pokedex" >
        <div id="left">
          <div id="logo"></div>
          <div id="bg_curve1_left"></div>
          <div id="bg_curve2_left"></div>
          <div id="curve1_left">
            <div id="buttonGlass">
              <div id="reflect"> </div>
            </div>
            <div id="miniButtonGlass1"></div>
            <div id="miniButtonGlass2"></div>
            <div id="miniButtonGlass3"></div>
          </div>
          <div id="curve2_left">
            <div id="junction">
              <div id="junction1"></div>
              <div id="junction2"></div>
            </div>
          </div>
          <div id="screen">
            <div id="topPicture">
              <div id="buttontopPicture1"></div>
              <div id="buttontopPicture2"></div>
            </div>
            <div id="picture">
              <img key={pokeInfo.sprites.other.dream_world.front_default} src={pokeInfo.sprites.other.dream_world.front_default} alt={pokeInfo.name} height="170" />
            </div>
            <div id="buttonbottomPicture"></div>
            <div id="speakers">
              <div className="sp"></div>
              <div className="sp"></div>
              <div className="sp"></div>
              <div className="sp"></div>
            </div>
          </div>
          <div id="bigbluebutton"></div>
          <div id="barbutton1"></div>
          <div id="barbutton2"></div>
          <div id="cross">
            <div id="leftcross">
              <div id="leftT"></div>
            </div>
            <div id="topcross">
              <div id="upT"></div>
            </div>
            <div id="rightcross">
              <div id="rightT"></div>
            </div>
            <div id="midcross">
              <div id="midCircle"></div>
            </div>
            <div id="botcross">
              <div id="downT"></div>
            </div>
          </div>
        </div>
        <div id="right">
          <div id="stats" className='d-flex flex-column align-items-start'>
            <div key={pokeInfo.name}><strong>Name:</strong>{" " + pokeInfo.name.charAt(0).toUpperCase() + pokeInfo.name.slice(1)}<br/></div>
            <div  key={pokeInfo.types.name}><strong>Type:</strong>{pokeInfo.types.map(type => ' ' + type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1))}<br/></div>
            {pokeInfo.stats.map(stat =>  <><div key={stat.stat.name}><strong>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1) + ": "}</strong>{stat.base_stat}<br></br></div></>)}  
          </div>
          <div id="blueButtons2">
            <div className="blueButton"></div>
            <div className="blueButton"></div>
            <div className="blueButton"></div>
            <div className="blueButton"></div>
            <div className="blueButton"></div>
          </div>
          <div id="miniButtonGlass4"></div>
          <div id="miniButtonGlass5"></div>
          <div id="barbutton3"></div>
          <div id="barbutton4"></div>
          <div id="yellowBox1"></div>
          <div id="yellowBox2"></div>
          <div id="bg_curve1_right"></div>
          <div id="bg_curve2_right"></div>
          <div id="curve1_right"></div>
          <div id="curve2_right"></div>
        </div>
      </div>
    )
  }
}

export default PokeCard;