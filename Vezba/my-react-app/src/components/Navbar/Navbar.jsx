import { Link } from "react-router"

const Navbar = () => {

    return(
      <>
      <Link to="/">
      <h1>Home</h1>
      </Link>
      <Link to="/charachters">
      <h1>Charachter</h1>
      </Link>
      <Link to="/favorites">
      <h1>Favorites</h1>
      </Link>

      <input type="text" />
     
      </>
    )
}

export default Navbar