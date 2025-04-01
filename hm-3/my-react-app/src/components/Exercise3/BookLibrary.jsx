import { useState } from "react";
import BookCard from "./BookCard";


const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    available: true,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    available: false,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    genre: "Science Fiction",
    available: true,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    available: true,
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    available: false,
  },
];

function BookLibrary() {
  const [filter, setFilter] = useState("all");

 let filteredBooks = [] 
 if(filter === "available"){
   filteredBooks = books.filter(book => book.available)
 }
 if(filter === "all"){
    filteredBooks = books
  }
 
  return (
    <div>
  <button onClick={() => setFilter("all")}>All Books</button>
  <button onClick={() => setFilter("available")}>Available books</button>
  {filteredBooks.map(book => (
 <BookCard key={book.id} book={book} />
  ))}
    </div>
  );
}

export default BookLibrary;
