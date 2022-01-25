import React, { useState, useEffect } from "react";
import axios from "axios";

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);

    const retrievePokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(res => setPokemon(res.data.results))
            .catch(err => console.log(err))
    }
    

    return(
        <div>
            <button onClick={retrievePokemon}>Fetch Pokemon!</button>
            <div>
                {pokemon.map((pokemon, idx) => {
                    return(
                        <p key={idx}>{pokemon.name}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default Pokemon;