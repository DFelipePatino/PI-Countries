import { Link } from "react-router-dom";


const landingPage = () => {




    return (
        <div>

            <Link to='/home'>
                <button>Home</button>
            </Link>

            <p>
                Soy el landing
            </p>

        </div>


    )
}

export default landingPage