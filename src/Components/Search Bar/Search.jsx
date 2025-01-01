
import './search.css'
import useDebounce from '../../Hooks/useDebounce';
function Searchbox({updateSearchterm}){

    let debounce = useDebounce((e)=>updateSearchterm(e.target.value))
    
    return(
        <div className="search-bar">
            <input
                type="text"
                placeholder="Pokemon name (ex: pikachu) "
                onChange={debounce}
            />
        </div>
    )
}
export default Searchbox;