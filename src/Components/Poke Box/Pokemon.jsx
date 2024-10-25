import Pokemonlist from "../PokemonList/PokemonList";
import Searchbox from "../Search Bar/Search";
import './pokedesk.css'
function Pokedex() {
    return(
        <div className="Pokedesk_Wrapper">
            <h1>Pokemon Go</h1>
            <Searchbox/>
            <Pokemonlist/>
        </div>
    )
}
export default Pokedex;