import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./pokemondetails.css"

function PokemonDetails({pokemonName}){
    const {id} = useParams()
    const [pokemon,setpokemon] = useState("")
    // console.log(pokemonName)
    let response;
    
        async function Downloadpokedetails() {
            try{
                if(pokemonName){
                    response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                    console.log(response.data)
                }else{
                response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                }
                setpokemon({
                    name:response.data.name,
                    image: response.data.sprites.other.dream_world.front_default,
                    height: response.data.height,
                    weight : response.data.weight,
                    types : response.data.types.map((t)=>t.type.name)
                })
            }
            catch(e){
                console.log("Error")
            }
    }
    
    useEffect(()=>{
        Downloadpokedetails()
    },[])
    return(
        <div className="main">
            <Link to="/">
                <div className="Home">Back-to-Home</div>
            </Link>
            <div className="main-div">
                <div className="name">Name : {pokemon.name}</div>
                <img className="imgg" src={pokemon.image}/>
                <div>Height : {pokemon.height}</div>
                <div>Weight : {pokemon.weight}</div>
                <div>Types : {pokemon.types}</div>    
            </div>
        </div>
    )
}
export default PokemonDetails;