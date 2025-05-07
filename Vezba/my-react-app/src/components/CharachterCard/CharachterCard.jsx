import { Link } from "react-router"
const CharacterCard = ({name, img, status, id}) => {
    return(
    <div>
        <img src={img} alt="charachter-img" />
        <h3>Name:{name}</h3>
        <p>Status:{status}</p>
        <Link  to={`${id}`}>
        <button>More Details</button>
        </Link>
    </div>

    )
}


export default CharacterCard
