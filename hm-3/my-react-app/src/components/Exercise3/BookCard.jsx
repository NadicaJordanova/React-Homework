
function BookCard({book}) {
    return(
        <div>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <p>{book.genre}</p>
            <p>{book.available? "Available" : "Not Available"}</p>
        </div>

    )
}

export default BookCard