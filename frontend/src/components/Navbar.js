import { Link } from "react-router-dom";


const Navbar=()=>{
    return(
        <header>

            <div className="continer">

                <Link to="/">
                
                  <h1>workout Body</h1>
                
                </Link>

            </div>
        </header>
    )
}

export default Navbar;