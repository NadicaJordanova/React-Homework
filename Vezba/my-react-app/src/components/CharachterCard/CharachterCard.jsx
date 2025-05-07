const CharacterCard = ({name, img, status}) => {
    return(
    <div>
        <img src={img} alt="charachter-img" />
        <h3>Name:{name}</h3>
        <p>Status:{status}</p>
    </div>

    )
}


export default CharacterCard
