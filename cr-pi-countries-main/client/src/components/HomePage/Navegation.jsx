import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";



const Navegation = ({ onSearch }) => {



    return (
        <div>

            <Link to='/home'>
                <button>Home</button>
            </Link>

            <Link to='/form'>
                <button>Form</button>
            </Link>

            <SearchBar onSearch={onSearch} />
        </div>
    )
}


export default Navegation