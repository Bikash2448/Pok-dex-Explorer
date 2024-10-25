import { Link } from 'react-router-dom';
import './pokemon.css'
function Pokemon({name,image,id}){
    return (
        <div className="Mainbox">
            <Link to={`/pokemon/${id}`}>
                <div className="name">{name}</div>
                <div><img src={image}></img></div>
            </Link>
            
        </div>
    )
}
export default Pokemon;