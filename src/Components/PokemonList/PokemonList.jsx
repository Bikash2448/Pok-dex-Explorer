import { useEffect, useState } from "react";
import axois from "axios"
import Pokemon from "../pokemon/pokemon";
import './pokemonlist.css'

function Pokemonlist(){
    const [pokemonList, setpokemonList]=useState([])
    const [isloading, setisloading]=useState(true)

    const [pokedesk_url,setpokedesk_url] = useState("https://pokeapi.co/api/v2/pokemon")
    const [next, setnext] = useState('')
    const [prev,setprev] = useState('')
    console.log(pokedesk_url)

    async function DownloadPokemon(){
        setisloading(true);
        const response = await axois.get(pokedesk_url)
        // console.log(response)
        const pokemonResult = response.data.results
        // console.log(pokemonResult)
        setnext(response.data.next)
        setprev(response.data.previous)

        const pokemonresultPromise = pokemonResult.map((pokemon)=>axois.get(pokemon.url))
        // console.log(pokemonresultPromise)
        const pokemondata = await axois.all(pokemonresultPromise)
        const res = pokemondata.map((poke)=>{
            const pokedata = poke.data
            return{
                id: pokedata.id,
                name : pokedata.name,
                image : (pokedata.sprites.others) ? pokedata.sprites.other.dream_world.front_default: pokedata.sprites.other.home.front_default,
                types : pokedata.types
            }
        })
        console.log(res)
        setpokemonList(res)
        setisloading(false)
    }

    
    useEffect(()=>{
        DownloadPokemon()
    },[pokedesk_url]);
    
    return(
        <>
           <h1>Pokemon List</h1>
           <div className="pokemon-img">
            {(isloading)?"data loading..": pokemonList.map((p)=>
                <Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>
            )}
           </div>
           <div className="pokemon-button">
            <button disabled={prev==null} onClick={()=>setpokedesk_url(prev)} className="prev">Prev</button>
            <button disabled={next==null} onClick={()=>setpokedesk_url(next)} className="next">Next</button>
           </div>

        </>
    )
}
export default Pokemonlist;