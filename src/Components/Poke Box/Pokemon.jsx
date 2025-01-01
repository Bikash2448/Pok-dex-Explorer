import Pokemonlist from "../PokemonList/PokemonList";
import Searchbox from "../Search Bar/Search";
import { useState } from 'react';
import './pokedesk.css'
import PokemonDetails from "../PokemonDetails/PokemonDetails";
function Pokemon() {
    const [searchterm,setsearchterm] = useState("")
    return(
        <div className="Pokedesk_Wrapper">
            <h1>Pokemon Go</h1>
            <Searchbox updateSearchterm = {setsearchterm}/>
            {/* {searchterm} */}
            {(!searchterm)?<Pokemonlist/>: <PokemonDetails key={searchterm} pokemonName={searchterm}/>}
        </div>
    )
}
export default Pokemon;